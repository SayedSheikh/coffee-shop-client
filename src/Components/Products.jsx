import React, { useState } from "react";
import Card from "./Card";
import { LiaCoffeeSolid } from "react-icons/lia";
import { useNavigate } from "react-router";

const Products = ({ coffees }) => {
  // console.log(coffees);

  const [data, setData] = useState(coffees);
  const navigate = useNavigate();
  return (
    <div className="my-[100px] max-w-[1000px] mx-auto w-11/12">
      <p className="text-center font-raleway">--- Sip & Savor ---</p>
      <h1
        style={{ textShadow: "2px 1px 4px #331A15" }}
        className="text-[#331A15] rancho text-[35px] text-center mb-[20px]">
        Our Popular Products
      </h1>
      <div
        onClick={() => navigate("/addCoffee")}
        className="text-center mb-[30px]">
        <button className="bg-[#E3B577] py-[8px] px-[15px] rounded-[5px] border-3 border-[#331A15] rancho text-[20px] text-white flex items-center justify-center mx-auto leading-none gap-[5px] cursor-pointer">
          Add Coffee <LiaCoffeeSolid size={30} className="text-[#331A15]" />
        </button>
      </div>
      <div className="grid   grid-cols-1 md:grid-cols-2 gap-[20px]  items-center justify-items-center">
        {/* <Card></Card> */}
        {data.map((coffee) => (
          <Card
            key={coffee._id}
            coffee={coffee}
            data={data}
            setData={setData}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
