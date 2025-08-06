"use client"; 

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const formSchema = z.object({
 
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function ProfileForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

const router = useRouter();
  const onSubmit = (data: FormSchemaType) => {
    console.log("Form Data:", data);
    router.push("/"); 
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  {...field}
                  className="w-"
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
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <input type="checkbox" /> Remember for 30 days{" "}
          </div>
          <div className="relative group cursor-pointer">
            Forgot password?{" "}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>
        <Button type="submit" className="w-full bg-red-400 hover:bg-red-500 transition-colors duration-200">Submit</Button>
        <div className="flex justify-evenly items-center mt-4 text-black">
          <div className="flex items-center gap-2 border p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            <FaGoogle />
            google
          </div>
          <div className="flex items-center gap-2 border p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            <FaFacebook />
            facebook
          </div>
          <div className="flex items-center gap-2 border p-2 rounded-md bg-gray-100  hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            <FaApple />
            apple
          </div>
        </div>
       <div className="flex flex-col mt-8 text-sm justify-center items-center text-gray-400 gap-3">
         <span>
          Need help?
        </span>
        <span>© All rights reserved. Made by Createx Studio</span>
       </div>
      </form>
    </Form>
  );
}
