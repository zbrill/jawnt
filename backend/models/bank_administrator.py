from pydantic import BaseModel
from uuid import UUID
from bank import Bank

class BankAdministrator(BaseModel):
    id: int
    uid: UUID
    first_name: str
    last_name: str
    bank: Bank