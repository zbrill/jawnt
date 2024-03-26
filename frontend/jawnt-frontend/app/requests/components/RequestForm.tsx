'use client'

import React, { useState } from "react"

export const RequestForm = () => {
    const [newRequest, setNewRequest] = useState<{ reason: string; amount: number, date: string }>({
        reason: '',
        amount: 0,
        date: new Date().toLocaleDateString()
      });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewRequest((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
    const handleSubmitNewRequest = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: save to database     
      };

    return (
        <div>
        <h3>Submit New Request</h3>
        <form onSubmit={handleSubmitNewRequest}>
          <div>
            <label htmlFor="reason">Reason:</label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={newRequest.reason}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={newRequest.amount}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newRequest.date}
              onChange={handleInputChange}
            />
          </div>
          <button className="save-request-btn" type="submit">Save</button>
        </form>
        </div>
    );
}