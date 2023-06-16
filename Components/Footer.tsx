import Image from "next/image";
import rocket from "../assets/icons/f (1).svg";
import circle from "../assets/icons/f (4).svg";
import varrify from "../assets/icons/f (3).svg";
import tag from "../assets/icons/f (5).svg";
import logo from "../assets/logo1.png";
import payment from "../assets/images/footer-new-payment.png";

import { PhoneIcon } from "@heroicons/react/24/outline";
const Footer = () => {
  return (
    <div className="px-6 md:px-24 max-w-screen">
      {/* Top Footer */}
      <div className="md:flex justify-between items-center md:space-x-6 space-y-6 md:space-y-0">
        <div className="flex items-center space-x-3 bg-orange-50 border p-3 rounded shadow-sm w-full">
          <Image src={rocket} alt="Rocket" />
          <div>
            <h6 className="font-bold">Free Shipping</h6>
            <p className="text-sm">For an order over $200</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-orange-50 border p-3 rounded shadow-sm w-full">
          <Image src={circle} alt="circle" />
          <div>
            <h6 className="font-bold">24/7 Support</h6>
            <p className="text-sm">Anywhere & anytime</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-orange-50 border p-3 rounded shadow-sm w-full">
          <Image src={varrify} alt="varrify" />
          <div>
            <h6 className="font-bold">100% Secure</h6>
            <p className="text-sm">100% Secure Payment</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-orange-50 border p-3 rounded shadow-sm w-full">
          <Image src={tag} alt="tag" />
          <div>
            <h6 className="font-bold">Daily offer</h6>
            <p className="text-sm">Discount upto 70% off</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}

      <div className=" md:flex justify-between items-center md:space-x-14 max-w-screen my-7 space-y-5 md:space-y-0">
        <div className="md:w-[30%] self-end">
          <Image src={logo} alt="logo" width={120} />
          <h1 className="text-xl font-bold my-5">
            Farmart- Your Online Food & Grocery
          </h1>
          <p className="text-gray text-[14px] my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem et
            vel recusandae accusantium nesciunt, odit iure? Amet nihil voluptate
            aliquam, corrupti ipsa ab, perspiciatis suscipit culpa itaque, et
            veritatis? Laudantium!
          </p>
        </div>

        <div>
          <h1 className="text-md font-bold mb-3">Help Center</h1>
          <ul className="opacity-60 space-y-3">
            <li>Payment</li>
            <li>Shipping</li>
            <li>Product Return</li>
            <li>FAQ</li>
            <li>Checkout</li>
          </ul>
        </div>

        <div>
          <h1 className="text-md font-bold mb-3">User Links</h1>
          <ul className="opacity-60 space-y-3">
            <li>About</li>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="md:w-[30%]">
          <h1 className="text-md font-bold mb-3">Formart- Newsletter</h1>
          <p className="text-gray text-[14px] my-4">
            Register now to get update on promotions and cupons. No worry! We
            not spam.
          </p>

          <div className="flex border justify-between border-gray rounded">
            <PhoneIcon className="w-6 ml-3" />
            <input
              type="text"
              placeholder="Your email"
              className="outline-none"
            />
            <input
              type="submit"
              className="bg-orange-500 p-2 border-gray rounded text-white float-right"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className=" md:flex justify-between">
        <p className="text-sm opacity-50 py-3">
          &copy;2023 all right reserved by--Josim Hossain
        </p>
        <Image src={payment} alt="Logo" className="w-[200px] h-[20px]" />
      </div>
    </div>
  );
};

export default Footer;
