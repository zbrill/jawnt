from fastapi import FastAPI
from models.mocks.mock_requests import get_mock_requests
from models.reimbursement import Reimbursement

app = FastAPI()

@app.get("/api/v1/requests/{user_id}")
def get_requests(user_id: int) -> list[Reimbursement]:
    return get_mock_requests(1)


'''Some system admin would need to be able to create and provision users
   but that's outside of the functional requirements for this assessment'''
@app.put("/api/v1/createUser")
def create_user():
    pass

'''Some system admin would need to be able to create and provision banks
   but that's outside of the functional requirements for this assessment'''
@app.put("/api/v1/createBank")
def create_bank():
    pass

