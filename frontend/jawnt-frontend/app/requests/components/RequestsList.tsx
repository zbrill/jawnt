'use client'

import React, { useState, useEffect } from 'react';
import { RequestForm } from './RequestForm';
import { Reimbursement } from '@/app/types';
import { fetchRequests } from '../../api/database'


export const RequestsList = () => {
  const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

  useEffect(() => {
    async function getRequests() {
      const mockRequests = await fetchRequests(1);
      setReimbursements(mockRequests);
    }
    getRequests()
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
          {reimbursements.map((reimbursement) => (
            <tr key={reimbursement.id}>
              <td>{reimbursement.date}</td>
              <td>{reimbursement.description}</td>
              <td>{reimbursement.bankAccount}</td>
              <td>${reimbursement.amount}</td>
              <td>{reimbursement.status}</td>
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
            <RequestForm setShowCreateModal={setShowCreateModal} 
            setRequests={setReimbursements}
            requests={reimbursements}/>
          </div>
        </div>
      )}
    </div>
  );
};