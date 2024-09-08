import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import '../../styles/css/reset.css';
import '../../styles/css/style.css';
import '../../styles/css/layui.css';
import '../../styles/css/swiper-bundle.min.css';

// Import images from the assets folder
import logoImg from '../../assets/images/logo.png';
import bannerBgImg from '../../assets/images/banner-bg.png';
import m1Img from '../../assets/images/m_1.png';
import m2Img from '../../assets/images/m_2.png';
import m3Img from '../../assets/images/m_3.png';
import m11Img from '../../assets/images/m_11.png';
import m10Img from '../../assets/images/m_10.png';
import m5Img from '../../assets/images/m_5.png';
import m6Img from '../../assets/images/m_6.png';
import m7Img from '../../assets/images/m_7.png';
import m9Img from '../../assets/images/m_9.png';
import m8Img from '../../assets/images/m_8.png';
import s2Img from '../../assets/images/s_2.png';
import s1Img from '../../assets/images/s_1.png';
import f1gImg from '../../assets/images/f_1g.png';
import f2Img from '../../assets/images/f_2.png';
import f3Img from '../../assets/images/f_3.png';
import f4Img from '../../assets/images/f_4.png';
import f5Img from '../../assets/images/f_5.png';

const Profile = () => {
  const [serviceVisible, setServiceVisible] = React.useState(false);

  const handleServiceToggle = () => {
    setServiceVisible(!serviceVisible);
  };

  const incomeItems = [
    'Withdraw Balance',
    'Recharge Balance',
    'Total Recharge',
    'Total Withdraw',
    'Total Assets',
    'Total Income',
    'Today Income',
    'Team Income',
    'TEAM B',
    'TEAM C',
    'TEAM D',
  ];

  const topNavItems = [
    { img: m11Img, text: 'Deposit', link: './button/Deposit.jsx' },
    { img: m10Img, text: 'Contract', link: './button/Contact.jsx' },
    { img: m5Img, text: 'Bonus', link: './button/Bonus.jsx' },
    { img: m6Img, text: 'About', link: './button/About.jsx' },
    { img: m7Img, text: 'Password', link: './button/Password.jsx' },
    { img: m9Img, text: 'Service', link: './button/Service.jsx' },
    { img: m8Img, text: 'Download', link: './button/Download.jsx' },
  ];

  return (
    <div className="bgColor">
      <header className="top">
        <h1 className="top-tit">My</h1>
      </header>

      <main className="my-main">
        <section className="my-top">
          <div className="my-top-left" id="avatar">
            <img src={logoImg} alt="User Avatar" />
          </div>
          <div className="my-top-right">
            <h3>ID : 164773</h3>
            <p>+917324086918</p>
            <p>
              <i className="layui-icon layui-icon-star-fill" aria-hidden="true"></i>
            </p>
          </div>
        </section>

        <section className="my-income-tab">
          <img src={bannerBgImg} alt="Income Banner" />
          <div className="my-income-list">
            {incomeItems.map((item, index) => (
              <IncomeItem key={index} label={item} />
            ))}
          </div>
        </section>

        <nav className="my-income-nav">
          <ul>
            <NavItem imgSrc={m1Img} label="Record" />
            <NavItem imgSrc={m2Img} label="Account" />
            <NavItem imgSrc={m3Img} label="Order" />
          </ul>
        </nav>

        <nav className="my-top-nav">
          <ul>
            {topNavItems.map((item, index) => (
              <NavItem key={index} imgSrc={item.img} label={item.text} link={item.link} />
            ))}
          </ul>
        </nav>

        <div className="my-top-out">
          <Link to="/login">Logout</Link>
        </div>
      </main>

      {serviceVisible && (
        <CustomerService onClose={handleServiceToggle} />
      )}
    </div>
  );
};

const IncomeItem = ({ label }) => (
  <div className="my-income-item">
    <h3>₹ 0</h3>
    <p>{label}</p>
  </div>
);

const NavItem = ({ imgSrc, label, link = "#" }) => (
  <li>
    <a href={link}>
      <img src={imgSrc} alt={label} />
      <p>{label}</p>
      <i className="layui-icon layui-icon-right" style={{ fontSize: '22px', color: '#333' }} aria-hidden="true"></i>
    </a>
  </li>
);

const FooterNavItem = ({ link, imgSrc, label }) => (
  <li>
    <Link to={link}>
      <img src={imgSrc} alt={label} />
      <p>{label}</p>
    </Link>
  </li>
);

const CustomerService = ({ onClose }) => (
  <div className="z-service">
    <div className="service-box">
      <h3>CUSTOMER SERVICE</h3>
      <ServiceLink href="https://wa.me/+918084661813" imgSrc={s2Img} label="WHATSAPP SERVICE" />
      <ServiceLink href="https://t.me/ag" imgSrc={s1Img} label="TELEGRAM SERVICE" />
      <ServiceLink href="https://t.me/agclub" imgSrc={s2Img} label="OFFICIAL CHANNEL" />
      <button type="button" className="service-close" onClick={onClose}>CLOSE</button>
    </div>
  </div>
);

const ServiceLink = ({ href, imgSrc, label }) => (
  <a href={href} target="_blank" className="service-item" rel="noopener noreferrer">
    <img src={imgSrc} alt={label} />
    {label}
    <span>GO</span>
  </a>
);

export default Profile;
