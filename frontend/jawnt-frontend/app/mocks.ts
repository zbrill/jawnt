import { Reimbursement } from "./types";

export const mockReimbursements: Reimbursement[] = [
    {
      id: 1,
      date: '2024-03-25',
      description: 'Payment for invoice #123',
      bankAccount: '*****2885',
      amount: 1000,
      status: 'Pending',
    },
    {
      id: 2,
      date: '2024-03-19',
      description: 'Salary payment for March',
      bankAccount: '*****2910',
      amount: 2500,
      status: 'Approved',
    },
    {
      id: 3,
      date: '2024-03-03',
      description: 'Office supplies purchase',
      bankAccount: '*****5005',
      amount: 500,
      status: 'Rejected',
    },
  ]