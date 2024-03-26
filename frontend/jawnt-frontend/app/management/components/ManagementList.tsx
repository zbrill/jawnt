'use client'

import React, { useState, useEffect } from 'react';
import { Reimbursement } from '@/app/types';
import { mockReimbursements } from '@/app/mocks';
import { ReimbursementReview } from './ReimbursementReview';


export const ManagementList = () => {
  const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);
  const [selectedReimbursement, setSelectedReimbursement] = useState<Reimbursement>();
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  useEffect(() => {
    // database call here
    // setRequests(getRequests())
    setReimbursements(mockReimbursements);
  },[]);

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
          {reimbursements.map((reimbursement) => (
            <tr className="management-tr" onClick={() => {
                setSelectedReimbursement(reimbursement)
                setShowReviewModal(true)}} 
                key={reimbursement.id}>
              <td>{reimbursement.date}</td>
              <td>{reimbursement.description}</td>
              <td>{reimbursement.bankAccount}</td>
              <td>${reimbursement.amount}</td>
              <td>{reimbursement.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedReimbursement && showReviewModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setShowReviewModal(false)}>
                &times;
            </span>
            <ReimbursementReview selectedReimbursement={selectedReimbursement}/>
          </div>
        </div>
      )}
    </div>
  );
};