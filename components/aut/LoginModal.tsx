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


 const LoginModal = () => {
    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <li>
                   <Button variant={"miss"} className="w-full hover:bg-gray-300 flex rounded-md">Sign In</Button> 
                </li>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle asChild>
                        <div className="flex justify-between items-center">
                            <span>Login</span>
                            <X/>
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <form>
                            <h1 className="text-lg font-bold text-black">Welcome to MY.PASAR</h1>
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
                                <Label htmlFor="email">Password</Label>
                                <Input placeholder="Enter your password" id="password"/>
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
  
 export default LoginModal;
