import category1 from "../../assets/images/best_seller/01_27a.webp";
import category2 from "../../assets/images/best_seller/01_8a.webp";
import category3 from "../../assets/images/best_seller/02_1a.webp";
import category4 from "../../assets/images/best_seller/04_2a.webp";
import category5 from "../../assets/images/best_seller/04_3a.webp";
import category6 from "../../assets/images/best_seller/05_8a.webp";
import category7 from "../../assets/images/best_seller/08_2a.webp";
import ShopProduct from "@/Components/ShopProduct";
// React Icons

import { BsFillGridFill, BsGrid1X2Fill } from "react-icons/bs";
const page = () => {
  return (
    <div className="px-6 md:px-24 my-10 flex">
      {/* Filter Side */}
      <div className="h-screen w-[30%] bg-orange-500"></div>
      {/* Product Side */}
      <div className="h-full w-[70%] bg-gray-100">
        <div className="flex justify-between m-4">
          <div className="flex items-center space-x-3">
            <h6 className="text-gray-400 font-semibold">Short by :</h6>
            <select
              name=""
              id=""
              className="p-3 border rounded outline-none cursor-pointer"
            >
              <option value="">Name</option>
              <option value="">High price to Low price</option>
              <option value="">Low price to High price</option>
              <option value="">New Product</option>
            </select>
          </div>

          <div className="flex space-x-4 items-center">
            <h6 className="text-gray-400 font-bold">View :</h6>
            <BsFillGridFill className="text-4xl border border-black rounded p-1 cursor-pointer hover:bg-orange-400 " />
            <BsGrid1X2Fill className="text-4xl border border-black rounded p-1 cursor-pointer hover:bg-orange-400" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 m-10">
          <ShopProduct productImage={category1} title="Food & Vegetable" />
          <ShopProduct productImage={category2} title="Breads Sweets" />
          <ShopProduct productImage={category3} title="Frozen Seafood" />
          <ShopProduct productImage={category4} title="Raw Meats" />
          <ShopProduct productImage={category5} title="Wines & Drinks" />
          <ShopProduct productImage={category6} title="Coffes & Teas" />
          <ShopProduct productImage={category7} title="Coffes & Teas" />
          <ShopProduct productImage={category1} title="Coffes & Teas" />
          <ShopProduct productImage={category2} title="Breads Sweets" />
          <ShopProduct productImage={category3} title="Frozen Seafood" />
          <ShopProduct productImage={category4} title="Raw Meats" />
          <ShopProduct productImage={category5} title="Wines & Drinks" />
          <ShopProduct productImage={category6} title="Coffes & Teas" />
          <ShopProduct productImage={category7} title="Coffes & Teas" />
          <ShopProduct productImage={category4} title="Raw Meats" />
          <ShopProduct productImage={category5} title="Wines & Drinks" />
        </div>
      </div>
    </div>
  );
};

export default page;
