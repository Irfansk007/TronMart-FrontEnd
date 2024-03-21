"use client"

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsLetter = () => {
    return ( 
        <div className="flex w-[85%] space-x-5 mx-auto">
            <Input type="email" placeholder="Enter Your Email to Subscribe" className="outline-gray-200 border-slate-600"></Input>
            <Button>Subscribe</Button>
        </div>
     );
}
 
export default NewsLetter;