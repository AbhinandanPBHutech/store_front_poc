import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import TopHeader from "../TopHeader";

function Layout({ children }) {
  return (
    <div className="layout">
      <TopHeader />
      {/* <Header /> */}
      {children}

      <Footer />
    </div>
  );
}
export default Layout;
