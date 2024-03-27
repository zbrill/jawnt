import { Reimbursement } from "../types";

export async function getRequestsForUser(user_id: number): Promise<Reimbursement[]> {
    fetch(`"http://localhost:8000/api/v1/requests/${user_id}"`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const reimbursements: Reimbursement[] = data.map((item: Reimbursement) => ({
            id: item.id,
            date: item.date,
            description: item.description,
            bankAccount: item.bankAccount,
            amount: item.amount,
            status: item.status
          }));
        return reimbursements;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
}
  