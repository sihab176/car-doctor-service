"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteMyBooking = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const DeleteBooking = await fetch(
      `http://localhost:3000/api/bookings/${id}`,
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
