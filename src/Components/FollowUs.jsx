import React from "react";
import img1 from "./../assets/images/cups/Rectangle 10.png";
import img2 from "./../assets/images/cups/Rectangle 11.png";
import img3 from "./../assets/images/cups/Rectangle 12.png";
import img4 from "./../assets/images/cups/Rectangle 13.png";
import img5 from "./../assets/images/cups/Rectangle 14.png";
import img6 from "./../assets/images/cups/Rectangle 15.png";
import img7 from "./../assets/images/cups/Rectangle 16.png";
import img8 from "./../assets/images/cups/Rectangle 9.png";

const FollowUs = () => {
  return (
    <div className="my-[100px] max-w-[940px] mx-auto w-11/12">
      <p className="text-center font-raleway">Follow Us Now</p>
      <h1
        style={{ textShadow: "2px 1px 4px #331A15" }}
        className="text-[#331A15] rancho text-[35px] text-center mb-[40px]">
        Follow on Instagram
      </h1>
      <div className="grid  sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-[20px]  items-center justify-items-center">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </div>
  );
};

export default FollowUs;
