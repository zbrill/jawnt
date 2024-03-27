from pydantic import BaseModel
from uuid import UUID


class Bank(BaseModel):
    id: int
    uid: UUID
    name: str
    location: str