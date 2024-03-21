import Link from "next/link";
import { getItems } from "@/Actions/Data";
import Products from "./Products";

const TopDeals = async() => {
   const prodInfo = await getItems();
   
    return ( 
        <div className="border-1  border-slate-400 shadow-lg rounded-lg w-[80%] flex mx-auto mt-3">
          <div className="flex flex-col ">
           <div className="flex items-center gap-x-4 m-5 mb-1 ">
            <span className="text-xl font-semibold">Today's best deal </span>
            <Link href="/" className="text-md font-medium text-[#2563eb]"> see more</Link>
           </div>
           <div className="flex w-[100%]  h-[100%] flex-row items-center mx-auto flex-wrap  p-2">
              {prodInfo && prodInfo.map((value: any)=>(
                <Products key={value.id} title={value.title} thumbnail={value.thumbnail} description={value.description} price={value.price}/>
              ))}
           </div>
          </div>
        </div>
     );
}
 
export default TopDeals;