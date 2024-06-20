import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { getAuthCookies } from "../../utils/utility.js";

const Layout = () => {
  const { accessToken } = getAuthCookies()
const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) {
      navigate('/login')
    }
  }, [accessToken]);

  return (
    <div className="layoutStyled">
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;