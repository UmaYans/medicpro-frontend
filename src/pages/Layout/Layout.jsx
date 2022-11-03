import { Link, Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <> 
   
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
