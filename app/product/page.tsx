"use client";
import { useState } from "react";
import Image from "next/image";
import category1 from "../../assets/images/best_seller/01_27a.webp";
import category2 from "../../assets/images/best_seller/01_8a.webp";
import category3 from "../../assets/images/best_seller/02_1a.webp";
import category4 from "../../assets/images/best_seller/04_2a.webp";
import category5 from "../../assets/images/best_seller/04_3a.webp";
import { StarIcon } from "@heroicons/react/24/outline";
const page = () => {
  const [count, setCount] = useState(1);
  const [dprice, setdPrice] = useState(25.8);
  const [price, setPrice] = useState(dprice);
  const [showPrice, setShowPrice] = useState();

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

  const addToCart = () => {
    const p: any = price.toFixed(2);
    setShowPrice(p);
  };

  return (
    <div className="my-10">
      <h1 className="block mb-5">Home/single product</h1>
      {/* Product Wrapper */}
      <div className="flex justify-around">
        {/* Image Side */}
        <div className="flex">
          <div>
            syste
            <div className="border">
              <Image src={category1} alt="Image1" className="w-14" />
            </div>
            <div className="border">
              <Image src={category2} alt="Image1" className="w-14" />
            </div>
            <div className="border">
              <Image src={category3} alt="Image1" className="w-14" />
            </div>
            <div className="border">
              <Image src={category4} alt="Image1" className="w-14" />
            </div>
            <div className="border">
              <Image src={category5} alt="Image1" className="w-14" />
            </div>
          </div>

          <div className="border">
            <Image src={category1} alt="Image1" />
          </div>
        </div>
        {/* Content Side */}
        <div>
          {/* Title */}
          <h1 className="text-2xl font-semibold">
            Farmart-- British Beef Mince
          </h1>
          {/* Sub Title */}
          <p className="w-[400px] text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            cupiditate dignissimos culpa eveniet. Architecto, sint!
          </p>
          {/* Price */}
          <h6 className="font-semibold my-2 text-2xl">
            ${dprice}
            <span className="line-through text-[16px] text-gray-400 ml-3">
              $7.20
            </span>
          </h6>
          {/* Ratting */}
          <div className="flex my-2">
            <StarIcon className="w-4 text-yellow-600" />
            <StarIcon className="w-4 text-yellow-600" />
            <StarIcon className="w-4 text-yellow-600" />
            <StarIcon className="w-4 text-yellow-600" />
            <StarIcon className="w-4 text-yellow-600" />
          </div>

          {/* Quantity */}
          <div className="flex">
            <button
              onClick={() => decress()}
              className="bg-black p-3 rounded-l w-6 text-white flex items-center justify-center h-8 px-4"
            >
              -
            </button>
            <h1 className="border px-8 flex justify-center items-center text-[20px] font-bold">
              {count}
            </h1>
            <button
              onClick={() => incress()}
              className="bg-black p-3 rounded-r w-6 h-8 text-white flex items-center justify-center px-4"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart()}
            className="bg-black p-3 rounded w-22 h-8 text-white flex items-center justify-center px-4 my-5"
          >
            Add To Cart
          </button>

          <h1>Price : {showPrice}</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
