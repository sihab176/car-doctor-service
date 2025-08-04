import CheckoutForm from "@/components/Forms/CheckoutForm";
import React from "react";

const checkoutPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `https://car-doctor-next-js-blush.vercel.app/api/service/${p.id}`
  );
  const data = await res.json();

  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        {/* forms */}
        <CheckoutForm data={data} />
      </section>

      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default checkoutPage;
