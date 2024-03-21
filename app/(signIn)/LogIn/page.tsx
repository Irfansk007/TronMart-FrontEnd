"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginAction,authCheck } from "@/Actions/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter()
  
  useEffect(() => {
   (async()=>{
    const name = await authCheck()
    if(name){
      router.push('/')
    }
   })()
  }, [])
  
  const formSchema = z.object({
    email: z.string().min(1, {
      message: "Please enter your email",
    }),
    password: z.string().min(1, {
      message: "Please enter your password",
    }),
  });
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isloading = form.formState.isSubmitting;

  const submit = async (values: z.infer<typeof formSchema>) => {
   const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);
   const response =  await LoginAction(formData)
   if(response==200){
      
      toast.success("login successful")
      router.push('/')
   }
   if(response==400){
      toast.error("user not found")
   }
   if(response==401){
      toast.error("invalid password")
   }
   if(response==500){
      toast.error("server error")
   }

  };
  return (
    <div className="border-slate-300 rounded-lg border w-[30%] bg-zinc-200 flex flex-col gap-y-4 shadow-lg">
      <div className="w-full flex items-center justify-center p-3">
        <p className="text-xl">SIGN IN</p>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
            <div className="space-y-4 w-[80%] mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-slate-800 font-semibold">Email id</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isloading}
                        placeholder="Enter the Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-slate-800 font-semibold">Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isloading}
                        placeholder="Enter the password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className=" mx-auto flex items-center justify-center">
               <Button variant="default" type="submit">Login</Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="flex border-2 mx-auto gap-2 py-3">
         <p>New to TronMart?</p>
        <Link href="/SignUp" className="text-[#492CDD]">SignUp</Link>
      </div>
    </div>
  );
};

export default LoginPage;
