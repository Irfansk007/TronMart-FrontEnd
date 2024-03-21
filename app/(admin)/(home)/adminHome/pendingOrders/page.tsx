"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const page = () => {
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
    <div className="w-[90%] mx-auto">
      <div className="my-6 border-2 border-zinc-200 shadow-lg rounded-lg">
        <Form {...form}>
          <form className="space-y-8 p-7">
            <div className="w-[80%] mx-auto pb-10 flex flex-wrap justify-between items-center gap-5 ">
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          className="outline  outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter the Product Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>category</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter the Cateogry"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>brand</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter the brand"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>description</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter the description"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          type="file"
                          disabled={isloading}
                          placeholder="select the image"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="imageurl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>imageurl</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter the imageurl"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>price</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter the price "
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="stocks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>stocks</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter total stocks avaible"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>thumbnail</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          type="file"
                          disabled={isloading}
                          placeholder="select the thumbnail"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[40%]">
                <FormField
                  control={form.control}
                  name="thumbnailurl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>thumbnailurl</FormLabel>
                      <FormControl>
                        <Input
                          className="outline outline-1 outline-offset-1 focus:ring focus:ring-offset-1"
                          disabled={isloading}
                          placeholder="Enter thumbnailurl"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-[100%] flex items-center justify-end">

                <Button type="submit" variant="green" size="lg">
                  Add
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default page;
