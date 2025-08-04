"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteMyBooking = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const DeleteBooking = await fetch(
      `https://car-doctor-next-js-blush.vercel.app/api/bookings/${id}`,
      {
        method: "DELETE",
      }
    );
    const res = await DeleteBooking.json();
    router.refresh();
    console.log("delete", res);
  };
  return (
    <>
      <MdDelete
        onClick={() => handleDelete(id)}
        className="h-8 w-8 font-bold"
      />
    </>
  );
};

export default DeleteMyBooking;
