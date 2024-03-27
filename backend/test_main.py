from main import app
from fastapi.testclient import TestClient

client = TestClient(app)

def test_get_user_requests():
    response = client.get("/api/v1/requests/1")
    assert response.status_code == 200
    assert response.json() == [
    {
      "id": 1,
      "date": '2024-03-25',
      "description": 'Payment for invoice #123',
      "bankAccount": '*****2885',
      "amount": 1000,
      "status": 'Pending',
    },
    {
      "id": 2,
      "date": '2024-03-19',
      "description": 'Salary payment for March',
      "bankAccount": '*****2910',
      "amount": 2500,
      "status": 'Approved',
    },
    {
      "id": 3,
      "date": '2024-03-03',
      "description": 'Office supplies purchase',
      "bankAccount": '*****5005',
      "amount": 500,
      "status": 'Rejected',
    },
  ]
    
def test_get_management_requests():
    response = client.get("/api/v1/requests/2")
    assert response.status_code == 200
    assert response.json() == [
    {
      "id": 1,
      "date": '2024-04-01',
      "description": "April Fool\'s prank",
      "bankAccount": '*****2885',
      "amount": 1,
      "status": 'Pending',
    },
    {
      "id": 2,
      "date": '2024-03-26',
      "description": 'Popped my tire, needed new one',
      "bankAccount": '*****2910',
      "amount": 250,
      "status": 'Approved',
    },
    {
      "id": 3,
      "date": '2024-03-03',
      "description": 'Meditation Retreat',
      "bankAccount": '*****5005',
      "amount": 4000,
      "status": 'Rejected',
    },
  ]