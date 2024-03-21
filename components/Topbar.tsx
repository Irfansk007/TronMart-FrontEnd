import Link from "next/link";

const Topbar = () => {
  return (
    <header className="h-[36px] flex bg-[#0769DA] items-center px-[120px] justify-between w-full text-sm text-white">
      <div>
        <p>24/7 Customer Service <b>1-800-234-5678</b></p>
      </div>
      <div className="flex space-x-8">
        <Link href='/'>Shipping and Return </Link>
        <Link href='/'>Track Order</Link>
        <Link href='/adminLogin'>Admin</Link>
      </div>
    </header>
  );
};

export default Topbar;
