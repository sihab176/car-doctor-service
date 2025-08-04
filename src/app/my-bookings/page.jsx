import Table from "@/components/Table";
import { headers } from "next/headers";

const fetchBookings = async () => {
  const fetchData = await fetch(
    "https://car-doctor-next-js-blush.vercel.app/api/bookings",
    {
      headers: new Headers(await headers()), // SSR cache এড়াতে
    }
  );
  const res = await fetchData.json();
  console.log("res", res);
  return res;
};

const MyBookingsPage = async () => {
  const data = await fetchBookings();
  console.log(data, "data");

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default MyBookingsPage;
