import React from "react";
import logo1 from "./../assets/images/more/logo1.png";
import bg13 from "./../assets/images/more/13.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa6";
import { FaMailBulk, FaTwitch } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg13})` }}
      className="max-w-[1700px] mx-auto pt-[100px] pb-[40px] bg-center bg-cover">
      <div className="max-w-[940px] mx-auto md:grid md:grid-cols-12 flex flex-col gap-[20px] w-11/12">
        <div className="col-span-6 flex flex-col gap-[20px] ">
          <div className=" space-y-[10px]">
            <img className="w-[70px]" src={logo1} alt="" />
            <p
              style={{ textShadow: "2px 1px 4px #331A15" }}
              className="text-[#331A15] rancho text-[35px]">
              Espresso Emporium
            </p>
            <p className="font-raleway text-[#1B1A1A] font-raleway">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-[15px]">
              <FaFacebook size={25}></FaFacebook>
              <FaTwitch size={25}></FaTwitch>
              <FaInstagram size={25}></FaInstagram>
              <FaLinkedin size={25}></FaLinkedin>
            </div>
          </div>
          <div>
            <h1
              style={{ textShadow: "2px 1px 4px #331A15" }}
              className="text-[#331A15] rancho text-[35px]">
              Get in Touch
            </h1>
            <div className="flex gap-[10px] items-center">
              <FaPhone></FaPhone>
              <p>+88 01533 333 333</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <FaMailBulk></FaMailBulk>
              <p>info@gmail.com</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <FaLocationArrow></FaLocationArrow>
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
        <div className="col-start-8 col-span-5 justify-self-start self-center">
          <p
            style={{ textShadow: "2px 1px 4px #331A15" }}
            className="text-[#331A15] rancho text-[35px]">
            Connect with Us
          </p>
          <div className="space-y-[13px]">
            <input
              className="w-full bg-white p-[10px] focus:outline-gray-300"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full bg-white p-[10px] focus:outline-gray-300"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full bg-white p-[10px] focus:outline-gray-300"
              name="desc"
              placeholder="Message"
              id=""
              rows={4}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
