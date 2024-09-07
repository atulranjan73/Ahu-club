import React from 'react';
import ProductItem from './ProductItem';

function Product() {
  const products = [
      {
        imgSrc: 'https://files.aaatlab.store/20240827/c6af649184c30f45b5b031aec3d316bb.jpg',
        name: 'Snapdragon P',
        price: '₹ 590',
        profitCycle: '45 Day',
        dailyEarnings: '₹ 30',
        totalIncome: '₹ 1350',
        stockPercentage: 62,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/e7d8e0945b7669ebfca62ac56e67136e.jpg',
        name: 'Snapdragon P-1',
        price: '₹ 2580',
        profitCycle: '48 Day',
        dailyEarnings: '₹ 134',
        totalIncome: '₹ 6432',
        stockPercentage: 94,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/a7b8e0955b7769ebfca62ac56e67236e.jpg',
        name: 'Snapdragon X',
        price: '₹ 3200',
        profitCycle: '50 Day',
        dailyEarnings: '₹ 160',
        totalIncome: '₹ 8000',
        stockPercentage: 85,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/b7c8e0945b7669ebfca62ac56e67156e.jpg',
        name: 'Snapdragon M',
        price: '₹ 1100',
        profitCycle: '40 Day',
        dailyEarnings: '₹ 55',
        totalIncome: '₹ 2200',
        stockPercentage: 73,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/c7d8e0945b7669ebfca62ac56e67176e.jpg',
        name: 'Snapdragon L',
        price: '₹ 1999',
        profitCycle: '42 Day',
        dailyEarnings: '₹ 95',
        totalIncome: '₹ 3990',
        stockPercentage: 68,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/d7e8e0945b7669ebfca62ac56e67186e.jpg',
        name: 'Snapdragon Z',
        price: '₹ 2890',
        profitCycle: '60 Day',
        dailyEarnings: '₹ 145',
        totalIncome: '₹ 8700',
        stockPercentage: 88,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/e7f8e0945b7669ebfca62ac56e67196e.jpg',
        name: 'Snapdragon A',
        price: '₹ 1590',
        profitCycle: '44 Day',
        dailyEarnings: '₹ 80',
        totalIncome: '₹ 3520',
        stockPercentage: 54,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/f7g8e0945b7669ebfca62ac56e671a6e.jpg',
        name: 'Snapdragon B',
        price: '₹ 2600',
        profitCycle: '47 Day',
        dailyEarnings: '₹ 120',
        totalIncome: '₹ 5640',
        stockPercentage: 79,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/g7h8e0945b7669ebfca62ac56e671b6e.jpg',
        name: 'Snapdragon C',
        price: '₹ 3100',
        profitCycle: '49 Day',
        dailyEarnings: '₹ 155',
        totalIncome: '₹ 7595',
        stockPercentage: 66,
      },
      {
        imgSrc: 'https://files.aaatlab.store/20240815/h7i8e0945b7669ebfca62ac56e671c6e.jpg',
        name: 'Snapdragon D',
        price: '₹ 1700',
        profitCycle: '52 Day',
        dailyEarnings: '₹ 85',
        totalIncome: '₹ 4420',
        stockPercentage: 72,
      },
    
  ];

  return (
    <div className="huiBg">
      <div className="top">
        <div className="top-tit">Product</div>
      </div>
      <div className="product-main">
        <div className="record-tab">
          <a href="#" className="active">
            Computer Applications
          </a>
          <a href="#">Intelligence 5G</a>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
