import React, { useState } from "react";
import "./../styles/Recharge.css";

const Recharge = () => {
  const [amount, setAmount] = useState("");
  const [channel, setChannel] = useState("");

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeChannel = (event) => {
    setChannel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Amount:", amount);
    console.log("Channel:", channel);
  };

  return (
    <div className="recharge-container">
      <div className="wallet-header">
        <h1>MY WALLET</h1>
        <div className="wallet-balance">
          <p>₹0</p>
          <p>Withdraw Wallet</p>
        </div>
        <div className="wallet-balance">
          <p>₹0</p>
          <p>Recharge Wallet</p>
        </div>
      </div>
      <div className="recharge-options">
        <button className="recharge-button">RUPEE RECHARGE</button>
        <button className="recharge-button">USDT RECHARGE</button>
      </div>
      <form className="recharge-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount(₹)</label>
          <input
            type="text"
            id="amount"
            className="form-control"
            placeholder="Rs. please enter recharge amount"
            value={amount}
            onChange={handleChangeAmount}
          />
        </div>
        <div className="form-group">
          <label htmlFor="channel">Channel</label>
          <select
            id="channel"
            className="form-control"
            value={channel}
            onChange={handleChangeChannel}
          >
            <option value="">Select Channel</option>
            <option value="MOBBPAY">MOBBPAY</option>
            <option value="CR1">CR1</option>
            <option value="G SACN">G SACN</option>
          </select>
        </div>
        <button type="submit" className="recharge-button">
          RECHARGE NOW
        </button>
      </form>
      <div className="recharge-tips">
        <h3>Tips</h3>
        <ul>
          <li>You must re-enter the recharge channel for each recharge</li>
          <li>
            Do not save any account number or QR code for repeated payment
          </li>
        </ul>
        <h3>Suggestions</h3>
        <ul>
          <li>Best recharge time: 6 am to 6 pm</li>
          <li>
            Use Paytm, UPI for a higher success rate (up to 98%)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recharge;
