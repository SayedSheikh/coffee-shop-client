import React from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";

const Details = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="my-[100px] max-w-[1000px] mx-auto w-11/12">
      <h1
        onClick={() => navigate("/")}
        style={{ textShadow: "2px 1px 4px #000" }}
        className="text-black rancho text-[25px] text-start mb-[20px] cursor-pointer">
        {"<--"}Back to home
      </h1>

      <div className="text-center bg-[#F4F3F0] p-[20px] md:p-[50px] flex flex-col sm:flex-row justify-center items-center gap-[80px] rounded-[8px]">
        <div>
          <img className="w-full" src={coffee.Photo} alt="" />
        </div>
        <div>
          <h1
            style={{ textShadow: "2px 1px 4px #331A15" }}
            className="text-[#331A15] rancho text-[25px] text-start mb-[20px] cursor-pointer">
            Niceties
          </h1>
          <div className="text-start font-raleway">
            <h3>Name: {coffee.Name}</h3>
            <h3>Chef: {coffee.Chef}</h3>
            <h3>Supplier: {coffee.Supplier}</h3>
            <h3>Taste: {coffee.Taste}</h3>
            <h3>Details: {coffee.Details}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
