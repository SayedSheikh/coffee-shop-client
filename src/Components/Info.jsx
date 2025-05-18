import React from "react";
import icon1 from "./../assets/images/icons/1.png";
import icon2 from "./../assets/images/icons/2.png";
import icon3 from "./../assets/images/icons/3.png";
import icon4 from "./../assets/images/icons/4.png";

const Info = () => {
  return (
    <div className=" py-[40px] bg-[#ECEAE3]">
      <div className="w-[80%] mx-auto grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-[35px]">
        <div className="space-y-[5px]">
          <img src={icon1} alt="" />
          <p className="text-[30px] rancho text-[#331A15]">Awesome Aroma</p>
          <p className="text-[13px] font-raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-[5px]">
          <img src={icon2} alt="" />
          <p className="text-[30px] rancho text-[#331A15]">High Quality</p>
          <p className="text-[13px] font-raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="space-y-[5px]">
          <img src={icon3} alt="" />
          <p className="text-[30px] rancho text-[#331A15]">Pure Grades</p>
          <p className="text-[13px] font-raleway">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="space-y-[5px]">
          <img src={icon4} alt="" />
          <p className="text-[30px] rancho text-[#331A15]">Proper Roasting</p>
          <p className="text-[13px] font-raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
