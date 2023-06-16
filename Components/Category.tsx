import category1 from "../assets/images/category/homepage-new-cat-1.webp";
import category2 from "../assets/images/category/homepage-new-cat-2.webp";
import category3 from "../assets/images/category/homepage-new-cat-3.webp";
import category4 from "../assets/images/category/homepage-new-cat-4.webp";
import category5 from "../assets/images/category/homepage-new-cat-5.webp";
import category6 from "../assets/images/category/homepage-new-cat-6.webp";

import ProductCart from "./ProductCart";

const Category = () => {
  return (
    <div className="my-10">
      <h1 className="font-bold text-xl mb-7">Browse By Category</h1>
      <div className="flex space-x-5">
        <ProductCart productImage={category1} title="Food & Vegetable" />
        <ProductCart productImage={category2} title="Breads Sweets" />
        <ProductCart productImage={category3} title="Frozen Seafood" />
        <ProductCart productImage={category4} title="Raw Meats" />
        <ProductCart productImage={category5} title="Wines & Drinks" />
        <ProductCart productImage={category6} title="Coffes & Teas" />
      </div>
    </div>
  );
};

export default Category;
