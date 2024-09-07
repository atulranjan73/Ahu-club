// src/components/Layout/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/images/f_1g.png';
import productIcon from '../../assets/images/f_2.png';
import teamIcon from '../../assets/images/f_3.png';
import officialIcon from '../../assets/images/f_4.png';
import myIcon from '../../assets/images/f_5.png';
import './footer.css'


const Footer = () => (
  <div className="foot">
    <ul>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'cur' : '')}>
          <img src={homeIcon} alt="Home" />
          <p>Home</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/product" className={({ isActive }) => (isActive ? 'cur' : '')}>
          <img src={productIcon} alt="Product" />
          <p>Product</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/team" className={({ isActive }) => (isActive ? 'cur' : '')}>
          <img src={teamIcon} alt="Team" />
          <p>Team</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/official" className={({ isActive }) => (isActive ? 'cur' : '')}>
          <img src={officialIcon} alt="Official" />
          <p>Official</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'cur' : '')}>
          <img src={myIcon} alt="My" />
          <p>My</p>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Footer;
