import Table from "@/components/Table";
import { headers } from "next/headers";

const fetchBookings = async () => {
  const fetchData = await fetch("http://localhost:3000/api/bookings", {
    headers: headers(), // SSR cache এড়াতে
  });
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
