import React from "react";
import { FaEye } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Card = ({ coffee, setData, data }) => {
  // console.log(data);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://cofee-store-server-bay.vercel.app/coffees/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data1) => {
            if (data1.deletedCount) {
              setData(data.filter((item) => item._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="p-[30px] bg-[#F5F4F1] flex justify-between items-center gap-[22px] w-full rounded-[10px] h-full pl-2">
      <div>
        <img className="w-full" src={coffee.Photo} alt="" />
      </div>
      <div className="font-raleway">
        <p>
          <span className="text-[#1B1A1A]">Name:</span> {coffee.Name}
        </p>
        <p>
          <span className="text-[#1B1A1A]">Chef:</span> {coffee.Chef}
        </p>
        <p>
          <span className="text-[#1B1A1A]">Price:</span> {coffee.Price}
        </p>
      </div>
      <div className="flex flex-col gap-[15px]">
        <div
          onClick={() => navigate(`/coffee/${coffee._id}`)}
          className="p-[5px] rounded-sm bg-[#D2B48C] cursor-pointer">
          <FaEye size={20} className="bg-[#D2B48C] text-white" />
        </div>
        <div
          onClick={() => navigate(`/coffee/edit/${coffee._id}`)}
          className="p-[5px] rounded-sm bg-[#3C393B] cursor-pointer">
          <MdEdit size={20} className=" bg-[#3C393B] text-white" />
        </div>
        <div
          onClick={() => handleDelete(`${coffee._id}`)}
          className="p-[5px] rounded-sm bg-red-500 cursor-pointer">
          <MdDelete size={20} className=" bg-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Card;
