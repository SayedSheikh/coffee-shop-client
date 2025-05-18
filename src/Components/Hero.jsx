import React from "react";
import bgImg from "./../assets/images/more/3.png";

const Hero = () => {
  const handleClick = () => {
    window.scroll(0, 1000);
  };
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-[600px] bg-center bg-cover relative   ">
      <div className="flex flex-col justify-center  text-white h-full max-w-[650px] absolute md:right-[5%]  px-[10px] md:p-0">
        <h1 className="rancho text-[50px]">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="font-raleway opacity-70">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button
          onClick={handleClick}
          className=" bg-[#E3B577] hover:text-white outline-2 hover:border-none border-white text-[#242222] w-[120px] mt-[10px] text-[24px] rancho px-[5px] py-[5px] cursor-pointer hover:bg-transparent transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
