import uuid

def get_mock_bank():
    return {"id": 1,
    "uid": uuid.uuid1(),
    "name": "ZBank",
    "location": "Portland, OR"}