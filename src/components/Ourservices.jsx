import dbConnect from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Ourservices = async () => {
  //FETCH DATA FROM DATABASE ====================>
  const servicesData = await dbConnect("servisesData").find({}).toArray();
  return (
    <div className="my-20 ">
      <div className="text-center space-y-5 my-10">
        <h1 className="text-4xl font-semibold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
        {/* map data  */}
        {servicesData.map((service) => (
          <div
            key={service.service_id}
            className="group relative block overflow-hidden"
          >
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              src={service?.img}
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6">
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {service?.title}
              </h3>

              <div className="flex justify-between items-center ">
                <p className="mt-1.5 text-sm text-yellow-400 font-semibold">
                  price : ${service?.price}
                </p>
                <Link href={`/services/${service?._id}`}>
                  <button className="text-2xl text-yellow-400 cursor-pointer">
                    <FaCircleArrowRight />
                  </button>
                </Link>
              </div>


            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Ourservices;
