import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import Searchbar from "./Searchbar";


import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
    <div className="h-[124.8px] bg-[#0573F0] text-white flex flex-col">
      <div className="flex w-full px-[120px] items-center justify-between h-[72.8px]">
        <div>
          <Link href="/">
            <Image src={logo} alt="" width={100} height={100} />
          </Link>
        </div>
        <div>
          <Searchbar />
        </div>
      </div>
      <div className="flex w-full justify-center gap-x-[60px] items-center font-bold">
        <Link href="/">All Products</Link>
        <Link href="/">Home Appliances</Link>
        <Link href="/">Audio And Video</Link>
        <Link href="/">Refrigereator</Link>
        <Link href="/">New Arrival</Link>
        <Link href="/">Today&apos;s Deal</Link>
        <Link href="/">Gift Cards</Link>
        <Link href="/">Bucket</Link>
        <UserDropDown />
      </div>
    </div>
  );
};

export default Header;
