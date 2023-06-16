import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
const ShopProduct = (props: any) => {
  const { productImage, title } = props;
  return (
    <div>
      <div className="cart bg-white  w-[170px] rounded hover:shadow-xl border transition-all hover:-mt-1">
        <span className="text-left text-[12px] bg-[#FBB72E] rounded-r p-[6px] text-white">
          10% off
        </span>
        <Image
          src={productImage}
          alt={title}
          width={100}
          className="mx-auto mt-3"
        />
        <div className="px-4 ">
          <p>{title}</p>
          <h6 className="font-semibold">
            $5.50{" "}
            <span className="line-through text-[14px] text-gray-400 ml-3">
              $7.20
            </span>
          </h6>
          <div className="flex my-2">
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
            <StarIcon className="w-3 text-yellow-600" />
          </div>
        </div>

        <button className="bg-[#FBB72E] w-full text-white p-2 font-bold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopProduct;
