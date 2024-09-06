// src/components/Withdraw.jsx
import React from 'react';
import './widhdraw.css';

function Withdraw() {
  return (
    <div className="withdraw-container">
      <h2>Withdraw Funds</h2>
      <form className="withdraw-form">
        <div className="form-group">
          <label htmlFor="account-holder-name">Account Holder Name</label>
          <input type="text" id="account-holder-name" placeholder="Enter Account Holder Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="bank-name">Bank Name</label>
          <input type="text" id="bank-name" placeholder="Enter Your Bank Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="ifsc-code">IFSC Code</label>
          <input type="text" id="ifsc-code" placeholder="Enter IFSC Code" required />
        </div>
        <div className="form-group otp-group">
          <label htmlFor="otp">OTP</label>
          <div className="otp-input-wrapper">
            <input type="text" id="otp" placeholder="Enter Your OTP" required />
            <button type="button" className="send-otp-button">Send OTP</button>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Withdraw;
