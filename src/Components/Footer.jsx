import React from "react";
import bgImg from "./../assets/images/more/15.jpg";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" bg-center bg-cover max-w-[1700px] mx-auto">
      <div className="flex justify-center items-center h-full gap-[10px] py-[13px]">
        <p className="rancho font-normal text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
