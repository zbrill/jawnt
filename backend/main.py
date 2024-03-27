from fastapi import FastAPI
from fastapi.testclient import TestClient
from models.mocks.mock_requests import *
from models.reimbursement import Reimbursement


app = FastAPI()

user_requests = get_mock_user_requests()
management_requests = get_mock_management_requests()

@app.get("/api/v1/requests/{user_id}", status_code=200)
def get_requests(user_id: int) -> list[Reimbursement]:
    print(user_id)
    if user_id == 1:
        return user_requests
    if user_id == 2:
        return management_requests


@app.post("/api/v1/requests/update/{request_id}", status_code=200)
def update_request_status(request_id: int, status: str):
    sql = f'''UPDATE reimbursements SET status={status} WHERE id={request_id}'''
    #pymysql.execute(sql)

@app.put("/api/v1/requests/create", status_code=201)
def create_request(request: Reimbursement):
    user_requests.append(request)

'''Some system admin would need to be able to create and provision users
   but that's outside of the functional requirements for this assessment'''
@app.put("/api/v1/createUser", status_code=201)
def create_user():
    pass

'''Some system admin would need to be able to create and provision banks
   but that's outside of the functional requirements for this assessment'''
@app.put("/api/v1/createBank", status_code=201)
def create_bank():
    pass

