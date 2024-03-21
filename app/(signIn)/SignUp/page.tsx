"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-hot-toast';
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
import { SignUpAction } from "@/Actions/auth";

const SignUpPage = () => {
    const router = useRouter();
  const formSchema = z.object({
    name: z.string().min(1, {
      message: "Please enter your name",
    }),
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
      name: "",
      email: "",
      password: "",
    },
  });

  const isloading = form.formState.isSubmitting;

  const submit = async (values: z.infer<typeof formSchema>) => {
   const response = await SignUpAction(values)
   if(response==201){
    toast.success("User Registration Successfully")
    router.push('/LogIn')
   }
   if(response==200){
    toast.error("User Already Exist")
   }
   if(response==500){
    toast.error("Server Error Please try After Sometime")
   }
  };
  return (
    <div className="border-slate-300 rounded-lg border w-[30%] bg-zinc-200 flex flex-col gap-y-4 shadow-lg">
      <div className="w-full flex items-center justify-center p-3">
        <p className="text-xl">SIGN UP</p>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
            <div className="space-y-4 w-[80%] mx-auto">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-slate-800 font-semibold">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isloading}
                        placeholder="Enter Your Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-slate-800 font-semibold">
                      Email id
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isloading}
                        placeholder="Enter the Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-slate-800 font-semibold">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isloading}
                        placeholder="Enter the password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" mx-auto flex items-center justify-center">
              <Button variant="default" type="submit">
                SignUp
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="flex border-2 mx-auto gap-3 py-3">
        <p>Already a User?</p>
        <Link href="/LogIn" className="text-[#492CDD]">
          {" "}
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
