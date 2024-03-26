'use client'

import React, { useState, useEffect } from 'react';
import { RequestForm } from './RequestForm';

type Request = {
  id: number;
  date: string;
  description: string;
  bankAccount: string;
  amount: number;
  status: string;
}

export const RequestsList = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

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
    // database call here
    // setRequests(getRequests())
    setRequests(mockRequests);
  },[]);


  return (
    <div className="requests-container">
    <button className="submit-request-btn" onClick={() => setShowCreateModal(true)}>Submit New Request</button>
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
      {showCreateModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setShowCreateModal(false)}>
              &times;
            </span>
            <RequestForm/>
          </div>
        </div>
      )}
    </div>
  );
};