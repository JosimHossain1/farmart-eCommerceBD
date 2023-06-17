"use client";
import Image from "next/image";
import category7 from "../assets/images/best_seller/08_2a.webp";
import { useState } from "react";

const CheckoutData = () => {
  const [count, setCount] = useState(1);
  const [dprice, setdPrice] = useState(25.8);
  const [price, setPrice] = useState(dprice);

  const incress = () => {
    if (count <= 9) {
      setCount(count + 1);
      setPrice(price + dprice);
    }
  };
  const decress = () => {
    if (count >= 2) {
      setCount(count - 1);
      setPrice(price - dprice);
    }
  };

  return (
    <tbody>
      <tr className="bg-white border-b">
        <td>
          <Image src={category7} alt="Porduct" className="w-8" />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <p id="myParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </th>
        <td>
          <div className="flex">
            <button
              onClick={() => decress()}
              className="bg-black p-3 rounded-l w-4 text-white flex items-center justify-center h-6 px-3"
            >
              -
            </button>
            <h1 className="border px-4 flex justify-center items-center text-[15px] font-bold">
              {count}
            </h1>
            <button
              onClick={() => incress()}
              className="bg-black p-3 rounded-r w-4 text-white flex items-center justify-center h-6 px-3"
            >
              +
            </button>
          </div>
        </td>
        <td className="px-6 py-4">${price.toFixed(2)}</td>
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
      <tr className="bg-white border-b">
        <td>
          <Image src={category7} alt="Porduct" className="w-8" />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17
        </th>
        <td>
          <div className="flex">
            <button
              onClick={() => decress()}
              className="bg-black p-3 rounded-l w-4 text-white flex items-center justify-center h-6 px-3"
            >
              -
            </button>
            <h1 className="border px-4 flex justify-center items-center text-[15px] font-bold">
              {count}
            </h1>
            <button
              onClick={() => incress()}
              className="bg-black p-3 rounded-r w-4 text-white flex items-center justify-center h-6 px-3"
            >
              +
            </button>
          </div>
        </td>
        <td className="px-6 py-4">${price.toFixed(2)}</td>
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
      <tr className="bg-white border-b">
        <td>
          <Image src={category7} alt="Porduct" className="w-8" />
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17
        </th>
        <td>
          <div className="flex">
            <button
              onClick={() => decress()}
              className="bg-black p-3 rounded-l w-4 text-white flex items-center justify-center h-6 px-3"
            >
              -
            </button>
            <h1 className="border px-4 flex justify-center items-center text-[15px] font-bold">
              {count}
            </h1>
            <button
              onClick={() => incress()}
              className="bg-black p-3 rounded-r w-4 text-white flex items-center justify-center h-6 px-3"
            >
              +
            </button>
          </div>
        </td>
        <td className="px-6 py-4">$2999</td>
        <td className="px-6 py-4">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default CheckoutData;
