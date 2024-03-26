'use client'

import React, { useState, useEffect } from 'react';

interface Request {
  id: number;
  date: string;
  description: string;
  bankAccount: string;
  amount: number;
  status: string;
}

const RequestsList: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    // Simulate a database call
    const mockRequests: Request[] = [
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
    ];

    // Simulate the delay of a database call
    setTimeout(() => {
      setRequests(mockRequests);
    }, 1000);
  }, []);

  return (
    <div className="requests-container">
      <table className="requests-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Bank Account</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.date}</td>
              <td>{request.description}</td>
              <td>{request.bankAccount}</td>
              <td>${request.amount.toFixed(2)}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsList;