import React from "react";
import Fieldset from "../Components/Fieldset";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const values = Object.fromEntries(formData.entries());

    // console.log(values);

    fetch("https://cofee-store-server-bay.vercel.app/coffees", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
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
          Add New Coffee
        </h1>
        <p className="pb-[20px]">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed <br /> to using Content here.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px] font-raleway">
          <Fieldset label={"Name"} placeholder={"Enter Name"}></Fieldset>
          <Fieldset label={"Chef"} placeholder={"Enter Chef"}></Fieldset>
          <Fieldset
            label={"Supplier"}
            placeholder={"Enter Supplier"}></Fieldset>
          <Fieldset label={"Taste"} placeholder={"Enter taste"}></Fieldset>
          <Fieldset label={"Price"} placeholder={"Enter Price"}></Fieldset>
          <Fieldset label={"Details"} placeholder={"Enter Details"}></Fieldset>
          <Fieldset
            label={"Photo"}
            placeholder={"Enter Photo url"}
            colSpan={"md:col-span-2"}></Fieldset>

          <button
            type="submit"
            className="bg-[#E3B577] py-[8px] px-[15px] rounded-[5px] border-3 border-[#331A15] rancho text-[20px] text-white flex items-center justify-center mx-auto leading-none gap-[5px] cursor-pointer w-full md:col-span-2">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
