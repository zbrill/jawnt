from pydantic import BaseModel

class Reimbursement(BaseModel):
    id: int
    date: str
    description: str
    bankAccount: str
    amount: float
    status: str