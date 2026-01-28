import os
from langchain_community.tools.tavily_search import TavilySearchResults
from dotenv import load_dotenv

load_dotenv()

# Ensure you have TAVILY_API_KEY in your .env file
# Get a free key at https://tavily.com/
def get_db_research_tool():
    """
    Returns a tool that allows the agent to search the web 
    for database best practices and industry-specific schemas.
    """
    if not os.getenv("TAVILY_API_KEY"):
        print("⚠️ Warning: TAVILY_API_KEY not found. Search tool will be disabled.")
        return None
        
    return TavilySearchResults(k=3) # Returns top 3 search results

def research_schema_standards(query: str):
    """
    A helper function to perform manual research if needed.
    """
    search = get_db_research_tool()
    if search:
        return search.run(query)
    return "Search tool not configured." 