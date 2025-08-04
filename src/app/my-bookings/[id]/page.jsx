import UpdateBooking from "@/components/Forms/UpdateBooking";
import { headers } from "next/headers";
import React from "react";

const UpdateBookingPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `https://car-doctor-next-js-blush.vercel.app/api/my_booking/${p.id}`,
    {
      headers: new Headers(await headers()),
    }
  );
  const data = await res.json();
  return (
    <div>
      <UpdateBooking data={data} />
    </div>
  );
};

export default UpdateBookingPage;
