import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
