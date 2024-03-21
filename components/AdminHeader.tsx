"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Searchbar from "./Searchbar";
import { Button } from "@/components/ui/button";
import logo from "../public/logo.svg";

import { adminLogOut } from "@/Actions/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";

const AdminHeader = () => {
  const router = useRouter();
  const logout = () => {
    adminLogOut();
    router.push("/adminLogin");
  };

  const formSchema = z.object({
    title: z.string().min(1, {
      message: "Enter your titleName",
    }),
    category: z.string().min(1, {
      message: "Enter your Category",
    }),
    Brand: z.string().min(1, {
      message: "Enter your brand",
    }),
    description: z.string().min(1, {
      message: "Enter the Description",
    }),
    image: z.array(z.object({})).min(1, {
      message: "select the images",
    }),
    imageurl: z.string().min(1, {
      message: "enter the image url",
    }),
    price: z.number().min(1, {
      message: "enter the price",
    }),
    stocks: z.number().min(1, {
      message: "enter the total stocks",
    }),
    thumbnail: z.array(z.object({})).min(1, {
      message: "select the thumbnail images",
    }),
    thumbnailurl: z.string().min(1, {
      message: "enter the thumbnail url",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      brand: "",
      description: "",
      image: {},
      imageurl: "",
      price: 0,
      stocks: 0,
      thumbnail: {},
      thumbnailurl: "",
    },
  });
  const isloading = form.formState.isLoading;
  return (
    <div className="h-[124.8px] bg-[#0573F0] text-white flex flex-col">
      <div className="flex w-full px-[120px] items-center justify-between h-[72.8px]">
        <div>
          <Link href="/" className="flex items-center gap-x-2">
            <Image src={logo} alt="" width={100} height={100} />
            <p>Admin</p>
          </Link>
        </div>
        <div>
          <Searchbar />
        </div>
      </div>
      <div className="flex  w-[85%] mx-auto items-center justify-between">
        <div className="flex w-full mx-auto  gap-x-[60px] items-center font-bold">
          <Link href="/">all Products</Link>
          <Link href="/">pending Orders</Link>
          <Link href="/">Completed Orders</Link>
          <Link href="/adminHome/pendingOrders">add order</Link>

          {/* <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="lg"
                className="text-md font-semibold"
              >
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Product</DialogTitle>
              </DialogHeader>
            
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog> */}
        </div>
        <div>
          <Button variant="destructive" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
