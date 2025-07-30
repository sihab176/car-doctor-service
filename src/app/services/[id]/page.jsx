import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = await params.id;
  const singleService = await dbConnect("servisesData").findOne({
    _id: new ObjectId(id),
  });

  return (
    <div>
      <section className="relative">
        <figure className="flex justify-center items-center rounded">
          <Image
            src="/images/checkout/checkout.png"
            width={1300}
            height={270}
            alt="image"
          />
        </figure>
        <div className="absolute  w-full h-full bg-black/70 top-0 rounded">
          <h1 className="text-white font-bold text-4xl flex items-center pt-40 pl-10">
            Service Details
          </h1>
        </div>
        <div className="absolute bottom-0   flex justify-center items-center text-center w-full">
          <div
            className="relative bg-red-600 text-white font-medium text-sm md:text-base px-5 py-2"
            style={{
              clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
            }}
          >
            Home / Service Details
          </div>
        </div>
      </section>
      {JSON.stringify(singleService)}
    </div>
  );
};

export default page;
