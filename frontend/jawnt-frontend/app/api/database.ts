import { Reimbursement } from "../types";

export async function fetchRequests(user_id: number): Promise<Reimbursement[]> {
  try {
    const response = await fetch(`/api/requests/${user_id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();

    const reimbursements: Reimbursement[] = data.map((item: any) => ({
      id: item.id,
      date: item.date,
      description: item.description,
      bankAccount: item.bankAccount,
      amount: item.amount,
      status: item.status
    }));

    return reimbursements;
  } catch (error) {
    console.error('Error:', error);
    return []
  }
}
  