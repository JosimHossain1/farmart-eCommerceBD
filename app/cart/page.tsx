import CheckoutData from "@/Components/CheckoutData";
import React from "react";

const page = () => {
  return (
    <div className="px-6 md:px-24 my-14">
      <h1 className="font-bold text-xl mb-5">Your Shopping Cart</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <CheckoutData />
        </table>
        <div></div>
      </div>
    </div>
  );
};

export default page;
