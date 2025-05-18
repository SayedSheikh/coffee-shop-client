import React from "react";
import bgImg from "./../assets/images/more/15.jpg";
import logo1 from "./../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-[90px] bg-center bg-cover max-w-[1700px] mx-auto">
      <div className="flex justify-center items-center h-full gap-[10px]">
        <img src={logo1} className="w-[55px]" alt="" />
        <p className="rancho font-normal md:text-[50px] text-white">
          Espresso Emporium
        </p>
      </div>
    </div>
  );
};

export default Navbar;
