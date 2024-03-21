"use client";
import Image from "next/image";
import ReactStars from "react-rating-star-with-type";
import React from "react";
interface ProductProps {
  thumbnail: string;
  title: string;
  description: string;
  price: number;
}
const Products = ({ title, thumbnail, description, price }: ProductProps) => {
  return (
    <div className=" border-zinc-300 rounded-lg shadow-lg border-2 w-[20%] m-6 flex flex-col items-center justify-center p-2">
      <div className="h-[300px] flex justify-center items-center">
        <Image src={thumbnail} alt="" width={200} height={200} />
      </div>
      <div
        className="flex flex-row text-sm w-[100%]"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <ReactStars count={5} value={3} classNames="m-3" />
      </div>
      <div className=" w-[90%]">
        <p className="font-semibold">{title}</p>
      </div>
      <div className=" w-[90%]">
        <p>{description}</p>
      </div>
      <div className="p-3 w-[100%] flex ">
        <p>{price} $</p>
      </div>
    </div>
  );
};

export default Products;
