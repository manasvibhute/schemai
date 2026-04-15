# import os
# import json
# from typing import TypedDict, List, Optional
# from langgraph.graph import StateGraph, START, END
# from groq import Groq
# from dotenv import load_dotenv

# load_dotenv()
# client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# # 1. Define the Agent State
# class AgentState(TypedDict):
#     prompt: str
#     schema: Optional[dict]
#     error: Optional[str]
#     iterations: int

# # 2. Architect Agent: Generates the JSON
# def architect_node(state: AgentState):
#     print("🏗️ Agent: Architecting Schema...")
#     feedback = f"\n\nPrevious Error to fix: {state['error']}" if state['error'] else ""
    
#     system_msg = "You are a Database Architect. Return ONLY a JSON object with 'tables' and 'relations' keys. Generate 3-5 tables."
    
#     chat_completion = client.chat.completions.create(
#         messages=[
#             {"role": "system", "content": system_msg},
#             {"role": "user", "content": state['prompt'] + feedback}
#         ],
#         model="llama-3.3-70b-versatile",
#         response_format={"type": "json_object"}
#     )
    
#     schema_data = json.loads(chat_completion.choices[0].message.content)
#     return {"schema": schema_data, "iterations": state['iterations'] + 1}

# # 3. Validator Agent: Checks logical integrity
# def validator_node(state: AgentState):
#     print("🔍 Agent: Validating Logic...")
#     schema = state.get('schema', {})
#     tables = schema.get('tables', [])
#     relations = schema.get('relations', [])
    
#     table_names = [t.get('name') for t in tables if t.get('name')]
    
#     for rel in relations:
#         # Check if required keys exist before accessing them
#         from_tbl = rel.get('fromTable')
#         to_tbl = rel.get('toTable')
        
#         if not from_tbl or not to_tbl:
#             return {"error": "Missing 'fromTable' or 'toTable' in relations array."}
            
#         if to_tbl not in table_names:
#             return {"error": f"Table '{to_tbl}' does not exist, but is referenced in a relation."}
            
#     return {"error": None}

# # 4. Conditional Router
# def should_continue(state: AgentState):
#     if state['error'] and state['iterations'] < 3:
#         return "architect"
#     return END

# # 5. Build the Graph
# workflow = StateGraph(AgentState)
# workflow.add_node("architect", architect_node)
# workflow.add_node("validator", validator_node)

# workflow.add_edge(START, "architect")
# workflow.add_edge("architect", "validator")
# workflow.add_conditional_edges("validator", should_continue)

# schema_app = workflow.compile()





import os
import json
import sqlite3
from typing import Annotated, TypedDict, List, Literal, Optional
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.sqlite import SqliteSaver
from groq import Groq
from dotenv import load_dotenv
from .tools import research_schema_standards

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# 1. State Definition
class AgentState(TypedDict):
    prompt: str
    schema: Optional[dict]
    error: Optional[str]
    status: str
    approved: bool
    iterations: int

# 2. Architect Node with STRICT JSON Prompt
def architect_node(state: AgentState):
    print("🏗️ Architect: Drafting/Refining Schema...")
    prompt = state.get('prompt')
    
    # 1. Capture feedback from the User OR the Validator
    # If the validator found an error, we tell the LLM exactly what to fix.
    validator_error = state.get('error')
    user_critique = state.get('critique')
    
    feedback = ""
    if validator_error:
        feedback += f"\n\nCRITICAL ERROR TO FIX: {validator_error}"
    if user_critique:
        feedback += f"\n\nUser Feedback: {user_critique}"

    # 2. Strict System Message
    system_msg = """
    You are a Senior Database Architect. 
    Design a DETAILED, PRODUCTION-READY relational database schema.

    STRICT REQUIREMENTS:
    1. Quantity: You MUST generate 6 to 10 tables. 
    2. Connectivity: Every table MUST be connected to at least one other table via the 'relations' array. No "orphan" tables.
    3. Content: No empty tables. Every table must have at least 4-5 relevant columns.
    4. Normalization: Use 3NF. Include Primary Keys (pk: true) and Foreign Keys.

    JSON STRUCTURE:
    - 'tables': Array of objects (name, columns).
    - 'relations': Array of objects (fromTable, fromColumn, toTable, toColumn).
    """

    response = client.chat.completions.create(
        messages=[
            {"role": "system", "content": system_msg},
            {"role": "user", "content": f"Project: {prompt} {feedback}"}
        ],
        model="llama-3.3-70b-versatile",
        response_format={"type": "json_object"}
    )
    
    schema_data = json.loads(response.choices[0].message.content)
    
    # Reset 'error' once we've attempted a fix
    return {
        "schema": schema_data, 
        "status": "securing", 
        "error": None, # Reset error so validator can check again
        "iterations": state.get('iterations', 0) + 1,
        "approved": False
    }
# 3. Security Agent Node
def security_node(state: AgentState):
    print("🛡️ Security Agent: Auditing for data privacy...")
    # In a real agentic flow, this agent would modify the schema to add 
    # encryption or hidden flags. For now, it passes the state.
    return {"status": "optimizing"}

# 4. Optimization Agent Node
def optimization_node(state: AgentState):
    print("📈 Optimizer: Verifying Normalization...")
    return {"status": "awaiting_approval"}

def should_continue(state: AgentState):
    # If the validator found an error, go back to the architect
    if state.get("error"):
        return "architect"
    # Otherwise, if the user hasn't approved it yet, wait (HITL)
    if not state.get("approved"):
        return END # This triggers the HITL pause
    return END

def validator_node(state: AgentState):
    print("🔍 Validator: Checking for orphans and empty tables...")
    schema = state.get("schema", {})
    tables = schema.get("tables", [])
    relations = schema.get("relations", [])
    
    connected_tables = set()
    for r in relations:
        connected_tables.add(r['fromTable'])
        connected_tables.add(r['toTable'])
        
    for table in tables:
        if table['name'] not in connected_tables and len(tables) > 1:
            return {"error": f"Table '{table['name']}' has no relationships. Connect it!"}
    # 1. Check for empty tables
    for table in tables:
        if not table.get("columns") or len(table["columns"]) == 0:
            return {"error": f"Table '{table['name']}' is empty. Add columns!"}
            
    # 2. Check for missing relationships (Orphans)
    # A robust schema for 6+ tables should have at least N-1 relations
    if len(tables) > 1 and len(relations) < (len(tables) - 1):
         return {"error": "Too few relationships. Connect your tables with Foreign Keys!"}

    return {"error": None, "status": "awaiting_approval"}

# 6. Graph Setup
workflow = StateGraph(AgentState)

workflow.add_node("architect", architect_node)
workflow.add_node("security", security_node)
workflow.add_node("optimization", optimization_node)
workflow.add_node("validator", validator_node)
workflow.add_edge(START, "architect")
workflow.add_edge("architect", "security")
workflow.add_edge("security", "optimization")
workflow.add_edge("optimization", "validator")
workflow.add_conditional_edges("validator", should_continue)
workflow.add_conditional_edges("optimization", should_continue, {
    "architect": "architect",
    END: END
})

# 7. Persistence Logic
db_path = os.path.join(os.getcwd(), "checkpoints", "memory.db")
os.makedirs(os.path.dirname(db_path), exist_ok=True)

conn = sqlite3.connect(db_path, check_same_thread=False)
memory = SqliteSaver(conn)

# Pause AFTER optimization so the frontend sees the final draft for approval
agent_executor = workflow.compile(
    checkpointer=memory, 
    interrupt_after=["optimization"]
)