import React from "react";
import './Header.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
const navigate = useNavigate();
const location = useLocation();
const { pathname } = location;

  const logout = async () => {
    const result = await axios.get(
      "http://localhost:3000/auth/logout",
      { withCredentials: true }
    );
    if (result.status === 200) {
      navigate('/login')
    }
  }

  return <div className="header container d-flex justify-content-between align-items-center expletus-sans">
    <div className="logo">Market Maker Trap</div>
    <nav className="header-nav">
      { pathname !== '/home' && <button onClick={()=>navigate('/home')}>Главная страница</button> }
      { pathname !== '/' && <button onClick={()=>navigate('/')}>Личный кабинет</button> }
      <button onClick={logout}>Выйти из учётной записи</button>
    </nav>
  </div>;
};

export default Header;
