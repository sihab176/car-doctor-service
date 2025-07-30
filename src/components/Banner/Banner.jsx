"use client";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[560px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner/1.jpg')" }}
    >
      <div className=" h-full bg-black/50 pt-40 text-white space-y-7 pl-16">
        <h1 className="text-white text-4xl font-bold">
          Affordable Price For <br /> Car Servicing
        </h1>
        <p className="">
          There are many variations of passages
          of available, <br /> but the majority have suffered alteration in some
          form
        </p>
        <button className="btn btn-outline ">Discover More</button>
      </div>
    </div>
  );
};

export default Banner;
