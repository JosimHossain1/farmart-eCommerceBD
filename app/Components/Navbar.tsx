import Image from "next/image";
import logo from "../../assets/logo1.png";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="border-b border-b-gray py-3">
      <nav className="px-24 flex justify-between items-center ">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={120} height={120} />
        {/* Search */}
        <div className="flex border border-gray p-2 bg-gray-200 rounded space-x-2 self-center">
          <select name="" id="" className="outline-none border-r-2 border-gray">
            <option value="">ALL CATEGORIES</option>
          </select>
          <form action="">
            <input
              className="outline-none"
              type="text"
              placeholder="I'am serching for..."
            />
          </form>
          <MagnifyingGlassIcon className="w-6 cursor-pointer " />
        </div>

        <div className="flex space-x-10">
          {/* Support */}
          <div className="flex flex-col">
            <h1 className="font-semibold text-[15px]">(+880) 1303651288</h1>
            <p className="self-end text-[12px] text-gray">support</p>
          </div>
          {/* Cart */}
          <div className="flex space-x-5">
            <UserCircleIcon className="w-6 cursor-pointer" />
            <HeartIcon className="w-6 cursor-pointer" />
            <ShoppingCartIcon className="w-6 cursor-pointer" />
            <div>
              <p className="text-[10px]">Your Cart</p>
              <h6 className="font-bold">$31.49</h6>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
