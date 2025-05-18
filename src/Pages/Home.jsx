import React from "react";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Contact from "../Components/Contact";
import FollowUs from "../Components/FollowUs";
import Products from "../Components/Products";
import { useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();
  // console.log(coffees);
  return (
    <div className="max-w-[1700px] mx-auto min-h-[calc(100vh-140px)]">
      <Hero></Hero>
      <Info></Info>
      <Products coffees={coffees}></Products>
      <FollowUs></FollowUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
