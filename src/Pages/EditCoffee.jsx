import React from "react";
import Fieldset from "../Components/Fieldset";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const EditCoffee = () => {
  const navigate = useNavigate();
  const coffee = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    fetch(`https://cofee-store-server-bay.vercel.app/coffees/${coffee._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.modifiedCount) {
          Swal.fire("Edit Something to modify!");
        } else {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="my-[100px] max-w-[1000px] mx-auto w-11/12">
      <h1
        onClick={() => navigate("/")}
        style={{ textShadow: "2px 1px 4px #331A15" }}
        className="text-[#331A15] rancho text-[25px] text-start mb-[20px] cursor-pointer">
        {"<--"}Back to home
      </h1>
      <div className="text-center bg-[#F4F3F0] p-[20px] md:p-[50px]">
        <h1
          style={{ textShadow: "2px 1px 4px #331A15" }}
          className="text-[#331A15] rancho text-[35px] text-center mb-[20px]">
          Edit Coffee
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px] font-raleway">
          <Fieldset
            label={"Name"}
            placeholder={"Enter Name"}
            defaultValue={coffee.Name}></Fieldset>
          <Fieldset
            label={"Chef"}
            placeholder={"Enter Chef"}
            defaultValue={coffee.Chef}></Fieldset>
          <Fieldset
            label={"Supplier"}
            placeholder={"Enter Supplier"}
            defaultValue={coffee.Supplier}></Fieldset>
          <Fieldset
            label={"Taste"}
            placeholder={"Enter taste"}
            defaultValue={coffee.Taste}></Fieldset>
          <Fieldset
            label={"Price"}
            placeholder={"Enter Price"}
            defaultValue={coffee.Price}></Fieldset>
          <Fieldset
            label={"Details"}
            placeholder={"Enter Details"}
            defaultValue={coffee.Details}></Fieldset>
          <Fieldset
            label={"Photo"}
            placeholder={"Enter Photo url"}
            colSpan={"md:col-span-2"}
            defaultValue={coffee.Photo}></Fieldset>

          <button className="bg-[#E3B577] py-[8px] px-[15px] rounded-[5px] border-3 border-[#331A15] rancho text-[20px] text-white flex items-center justify-center mx-auto leading-none gap-[5px] cursor-pointer w-full md:col-span-2">
            Edit Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCoffee;
