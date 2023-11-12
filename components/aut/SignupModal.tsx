"use client";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  import { Button } from "../ui/button";
  import { X } from "lucide-react";
  import { Label } from "../ui/label";
  import { Input } from "../ui/input";

  import Images from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterType, registerSchema } from "@/validations/authSchemas";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignupModal () {
        const supabase = createClientComponentClient();
        const [open, setOpen] = useState<boolean>(false);
        const [loading, setLoading] =useState<boolean>(false);
        const router= useRouter()
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm<RegisterType>({
            resolver: yupResolver(registerSchema),
          })
          
          const onSubmit = async (payload:RegisterType) => {
            setLoading(true)
            const {data, error} = await supabase.auth.signUp({
                email: payload.email,
                password: payload.password,
                options: {
                    data: {
                        name: payload.name
                    },
                },
            });

            setLoading(false)
            if (error) {
                toast.error(error.message, {theme: "colored"});
            } else if (data.user) {
                await supabase.auth.signInWithPassword({
                    email: payload.email,
                    password: payload.password,
                });
                setOpen(false);
                router.refresh();
                toast.success("Logged in successfully", {theme: "colored"})
            }

        };

    return ( 

        <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                <li onClick={() => setOpen(true)}>
                   <Label htmlFor="signup" className="text-rose-500 ml-2 hover:text-black cursor-pointer">Sign Up !</Label> 
                </li>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle asChild>
                        <div className="flex justify-between items-center">
                            <span>Sign Up </span>
                            <X className="cursor-pointer" onClick={() => setOpen(false)}/>
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <ToastContainer/>
                        {/* Name */}
                        
                        <div className="mt-5">
                                <Label htmlFor="name">Name</Label>
                                <Input 
                                    placeholder="Enter your name" 
                                    id="name" 
                                    {...register("name")}/>
                                <span className="text-red-400">{errors.name?.message}</span>
                            </div>

                        {/* Email */}

                            <div className="mt-5">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                placeholder="Enter your email" 
                                id="email" 
                                {...register("email")}/>
                                <span className="text-red-400">{errors.email?.message}</span>
                            </div>

                        {/* Password */}

                            <div className="mt-5">
                                <Label htmlFor="password">Password</Label>
                                <Input placeholder="Enter your password" id="password" type="password" {...register("password")}/>
                                <span className="text-red-400">{errors.password?.message}</span>
                            </div>

                        {/* Confirm Password */}

                            <div className="mt-5">
                                <Label htmlFor="cpassword">Confirm Password</Label>
                                <Input placeholder="Confirm your password" id="cpassword" type="password" {...register("password_confirmation")}/>
                                <span className="text-red-400">{errors.password_confirmation?.message}</span>
                            </div>

                        {/* Continue Button */}

                            <div className="mt-5">
                                <Button className="bg-green-600 w-full" disabled={loading}>{loading ? "Processing" : "Continue"}</Button>
                            </div>
                            <h1 className="text-center my-2 text-xl font-bold"> -- OR --</h1>

                        {/* Google */}

                           <Button variant={"outline"} className="w-full">
                                <Images
                                    src="/images/google.png"
                                    width={40}
                                    height={40}
                                    alt="google_logo"
                                    className="mr-5"
                                />
                                Continue with Google
                            </Button>

                        </form>

                    </AlertDialogDescription>
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>

     );
 };
