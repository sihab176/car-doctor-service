// "use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const page = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `https://car-doctor-next-js-blush.vercel.app/api/service/${p.id}`,
    {
      cache: "force-cache",
    }
  );
  const singleService = await res.json();

  return (
    <div>
      {/* banner section */}
      <section className="relative mb-20">
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
      {/* image section and button section */}
      <section className="flex  justify-between items-center">
        <figure className="">
          <Image
            src={singleService?.img}
            width={750}
            height={200}
            alt="ima"
            style={{ width: "100%", height: "auto" }}
          />
        </figure>
        {/* buttons */}
        <div className="gap-10 bg-[#F3F3F3] p-10">
          <h1 className="text-2xl font-semibold">Services</h1>
          <br />
          <Link href={`/checkout/${singleService?._id}`}>
            <button className="px-6 py-2 bg-orange-400  flex justify-between items-center gap-3">
              checkout
              <span>
                <FaArrowRight />
              </span>{" "}
            </button>
          </Link>
          <br />
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold">Unique Car Engine Service</h1>
        <p>{singleService?.description}</p>
      </section>
      {/* {JSON.stringify(singleService)} */}
    </div>
  );
};

export default page;
