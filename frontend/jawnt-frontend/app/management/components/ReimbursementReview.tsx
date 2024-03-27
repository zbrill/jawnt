import { Reimbursement } from '@/app/types';
import React, { useState } from 'react';

type ReimbursementReviewProps = {
    selectedReimbursement: Reimbursement
}

export const ReimbursementReview = (props: ReimbursementReviewProps) => {
  const [status, setStatus] = useState('Pending');

  const handleStatusChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <h1>{props.selectedReimbursement.description}</h1>
      <div>
        <label htmlFor="status">Status: </label>
        <select id="status" value={status} onChange={handleStatusChange}>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Denied">Denied</option>
          <option selected>{props.selectedReimbursement.status}</option>
        </select>
      </div>
    </div>
  );
};
