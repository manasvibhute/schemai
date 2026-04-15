# {
#   "tables": [
#     {
#       "id": "users",
#       "name": "users",
#       "columns": [
#         { "name": "id", "type": "uuid", "pk": true },
#         { "name": "email", "type": "varchar", "unique": true },
#         { "name": "password", "type": "varchar" }
#       ]
#     }
#   ],
#   "relations": [
#     {
#       "from": "users.id",
#       "to": "orders.user_id",
#       "type": "one-to-many"
#     }
#   ]
# }
from sqlalchemy import Column, Integer, String, JSON, DateTime
from services.database import Base
import datetime

class GeneratedSchema(Base):
    __tablename__ = "generated_schemas"

    id = Column(Integer, primary_key=True, index=True)
    user_prompt = Column(String)
    schema_json = Column(JSON)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)