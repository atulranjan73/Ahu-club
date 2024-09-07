import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/bundle';
// import '../styles/css/layui.css';
// import '../styles/css/reset.css';
// import '../styles/css/style.css';
// import '../styles/css/swiper-bundle.min.css';
import './Notics.css'

const Notice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  useEffect(() => {
    if (visible) {
      new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
        autoplay: { delay: 5000 },
      });
    }
  }, [visible]);

  return (
    <div className={`home-notice ${visible ? 'visible' : 'hidden'}`}>
      <i className="layui-icon layui-icon-speaker"></i>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">User1234 09:15:30 Purchase $50 success</div>
          <div className="swiper-slide">User5678 09:45:10 Purchase $75 success</div>
          <div className="swiper-slide">User9101 10:05:25 Purchase $30 success</div>
          <div className="swiper-slide">User1121 10:20:40 Purchase $100 success</div>
          <div className="swiper-slide">User3141 10:35:55 Purchase $200 success</div>
          <div className="swiper-slide">User1617 10:50:10 Purchase $150 success</div>
          <div className="swiper-slide">User1819 11:05:25 Purchase $120 success</div>
          <div className="swiper-slide">User2021 11:20:40 Purchase $80 success</div>
          <div className="swiper-slide">User2223 11:35:55 Purchase $60 success</div>
          <div className="swiper-slide">User2425 11:50:10 Purchase $90 success</div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
