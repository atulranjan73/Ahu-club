import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; // Make sure your CSS file is correctly imported

const ProductItem = ({ imgSrc, name, price, profitCycle, dailyEarnings, totalIncome, stockPercentage }) => {
  const navigate = useNavigate();

  const handleRentalClick = () => {
    navigate('/recharge');
  };

  return (
    <div className="product-item">
      <div className="product-img">
        <img src={imgSrc} alt={name} />
        <div className="product-name">
          <p>{name}</p>
          <h3>{price}</h3>
          <button className="rental-button" onClick={handleRentalClick}>Rental</button> {/* Apply CSS class */}
        </div>
      </div>
      <div className="product-text">
        <p>
          <img src="../assets/images/icon_6.png" alt="" /> The Profit Cycle Of This Profit Plan :
          <span>{profitCycle}</span>
        </p>
        <p>
          <img src="../assets/images/icon_7.png" alt="" /> Daily Of Earnings :
          <span>{dailyEarnings}</span>
        </p>
        <p className="red">
          <img src="../assets/images/icon_8.png" alt="" /> Total Income Of This Plan :
          <span>{totalIncome}</span>
        </p>
      </div>
      <div className="product-stock">
        <font style={{ marginLeft: '-5px', left: `${stockPercentage}%` }}>{stockPercentage}%</font>
        <span style={{ width: `${stockPercentage}%` }}></span>
      </div>
    </div>
  );
};

export default ProductItem;
