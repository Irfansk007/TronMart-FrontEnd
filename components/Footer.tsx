import Image from "next/image";
import logo2 from "../public/logo2.svg";
import Link from "next/link";
import { Copyright, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex flex-col h-full mt-3 ">
      <div className="flex w-[100%] items-center justify-center gap-x-[14rem] mx-auto p-8">
        <div>
          <Link href="/">
            <Image src={logo2} alt="logo" height={100} width={100} />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-black-500 font-bold">SHOP</p>
          </div>
          <div className="flex flex-col text-blue-600">
            <Link href="/">Hot Deals</Link>
            <Link href="/">Categories</Link>
            <Link href="/">Brands</Link>
            <Link href="/">Reabtes</Link>
            <Link href="/">Weekly Deals</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-black-500 font-bold">Need Help</p>
          </div>
          <div className="flex flex-col text-blue-600">
            <Link href="/">Contact</Link>
            <Link href="/">Order Tracking</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Return Policy</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-black-500 font-bold">Need Help</p>
          </div>
          <div className="flex flex-col text-blue-600">
            <p>123 Fifth Avenue, New York, NY</p>
            <p>10160</p>
            <p>contact@info.com</p>
            <p>929-242-6868</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-[50rem] py-[2rem] bg-[#27323F] text-white">
        <div className="flex text-sm items-center gap-1">
          <Copyright className="h-[1rem]" />
          <span> 2023 Electronic Store. Powered by Electronic Store</span>
        </div>
        <div className="flex gap-x-7">
          <Link href="/">
            <Instagram />
          </Link>
          <Link href="/">
            <Facebook />
          </Link>
          <Link href="/">
            <Twitter />
          </Link>
          <Link href="/">
            <Youtube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
