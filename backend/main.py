



# import sys
# import os
# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel

# # Add the current directory and its parent to the python path
# sys.path.append(os.path.dirname(os.path.abspath(__file__)))
# sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# # Now this import will work
# try:
#     from services.agent_graph import schema_app
# except ImportError:
#     # Fallback if the folder structure is slightly different
#     from agent_graph import schema_app

# app = FastAPI()

# # ... rest of your FastAPI code ...



# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from services.agent_graph import schema_app

# app = FastAPI()

# # 2. Middleware & CORS Configuration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:5173", 
#         "http://localhost:5174",
#         "https://schema-ai-frontend.onrender.com"
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class PromptRequest(BaseModel):
#     prompt: str

# @app.post("/api/generate-schema")
# async def generate_schema(request: PromptRequest):
#     try:
#         # Start the Agentic Loop
#         initial_state = {
#             "prompt": request.prompt,
#             "schema": None,
#             "error": None,
#             "iterations": 0
#         }
        
#         final_state = schema_app.invoke(initial_state)
#         return final_state["schema"]
        
#     except Exception as e:
#         print(f"❌ Server Error: {e}")
#         raise HTTPException(status_code=500, detail=str(e))

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=10000)



import sys
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import uuid
from services.database import engine, get_db
from models import schema_db
from sqlalchemy.orm import Session
from fastapi import Depends


schema_db.Base.metadata.create_all(bind=engine)

@app.post("/api/generate-schema")
async def handle_request(data: RequestData, db: Session = Depends(get_db)):
    # ... your existing agent_executor logic ...
    
    # NEW: Save the result to your database
    new_record = schema_db.GeneratedSchema(
        user_prompt=data.prompt,
        schema_json=result["schema"]
    )
    db.add(new_record)
    db.commit()
    
    return result

# --- PATH GUARD: Add backend root to Python path ---
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.append(current_dir)

# Now the import will work perfectly
try:
    from services.agent_graph import agent_executor
except ImportError as e:
    print(f"❌ Still can't find services. Error: {e}")
    sys.exit(1)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestData(BaseModel):
    prompt: str
    thread_id: Optional[str] = None
    approved: Optional[bool] = False
    critique: Optional[str] = None

@app.post("/api/generate-schema")
async def handle_request(data: RequestData):
    thread_id = data.thread_id or str(uuid.uuid4())
    config = {"configurable": {"thread_id": thread_id}}
    
    try:
        current_state = agent_executor.get_state(config)
        
        # Scenario: Resuming after Human-in-the-loop interruption
        if current_state.values:
            result = agent_executor.invoke(
                {"approved": data.approved, "critique": data.critique}, 
                config
            )
        # Scenario: Fresh start
        else:
            result = agent_executor.invoke(
                {"prompt": data.prompt, "iterations": 0, "approved": False}, 
                config
            )

        final_state = agent_executor.get_state(config)
        return {
            "thread_id": thread_id,
            "schema": final_state.values.get("schema"),
            "status": final_state.values.get("status")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=10000)