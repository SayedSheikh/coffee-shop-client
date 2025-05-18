import React from "react";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[100vh-140px]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
