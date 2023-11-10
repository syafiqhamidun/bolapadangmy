"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
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


 const SignupModal = () => {
        const [open, setOpen] = useState<boolean>(false)
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
                    <AlertDialogDescription>
                        <form>
                        <div className="mt-5">
                                <Label htmlFor="name">Name</Label>
                                <Input placeholder="Enter your name" id="name"/>
                                <span className="text-red-400"></span>
                            </div>

                            <div className="mt-5">
                                <Label htmlFor="email">Email</Label>
                                <Input placeholder="Enter your email" id="email"/>
                                <span className="text-red-400"></span>
                            </div>
                        </form>
                    </AlertDialogDescription>

                    <AlertDialogDescription>
                        <form>
                            <div className="mt-5">
                                <Label htmlFor="password">Password</Label>
                                <Input placeholder="Enter your password" id="password"/>
                                <span className="text-red-400"></span>
                            </div>

                            <div className="mt-5">
                                <Label htmlFor="cpassword">Confirm Password</Label>
                                <Input placeholder="Confirm your password" id="cpassword"/>
                                <span className="text-red-400"></span>
                            </div>

                            <div className="mt-5">
                                <Button className="bg-red-400 w-full">Continue</Button>
                            </div>
                            <h1 className="text-center my-2 text-xl font-bold"> -- OR --</h1>

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
 }
  
 export default SignupModal;
