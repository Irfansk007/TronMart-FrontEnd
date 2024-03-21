"use client"
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
const Searchbar = () => {
    return ( 
        <div className="space-x-3 flex items-center">
             <Input type="text" placeholder="Search Products..."/>
           <Button variant="default">
            <Search></Search>
           </Button>
        </div>
     );
}
 
export default Searchbar;