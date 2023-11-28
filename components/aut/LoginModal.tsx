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
  import { useState } from "react";
  import { yupResolver } from "@hookform/resolvers/yup"
  import { useForm } from "react-hook-form"
  import { LoginSchema, LoginType, RegisterType, registerSchema } from "@/validations/authSchemas";
  import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRouter } from "next/navigation";
  import SignupModal from "./SignupModal";
  

 const LoginModal = () => {
        const [open, setOpen] = useState<boolean>(false);
        const [loading, setLoading] = useState<boolean>(false);
        const supabase = createClientComponentClient();
        const router = useRouter();
        
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm<LoginType>({
            resolver: yupResolver(LoginSchema),
          });

        const onSubmit = async (payload:LoginType) => {
            setLoading(true)
            const {data, error} = await supabase.auth.signInWithPassword({
                email : payload.email,
                password : payload.password,
            })
            router.refresh()
            ;
            setLoading(false);
            if (error) {
                toast.error(error.message, {theme: "colored"})
            } else if (data.user) {
                setOpen(false)
                toast.success("Logged in successfully !", {theme : "colored"});
            };
        }

    return ( 
        <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                <li onClick={() => setOpen(true)}>
                   <Button variant={"miss"} className="w-full hover:bg-gray-300 flex rounded-md">Sign In</Button> 
                </li>
            </AlertDialogTrigger>

            <AlertDialogContent asChild>
                <AlertDialogHeader>
                    <AlertDialogTitle >
                        <div className="flex justify-between items-center">
                            <span>Login</span>
                            <X className="cursor-pointer" onClick={() => setOpen(false)}/>
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <div>
                            <ToastContainer/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-lg font-bold text-black">Welcome to BolaPadang.MY</h1>
                            <div className="mt-5">
                                <Label htmlFor="email">Email</Label>
                                <Input placeholder="Enter your email" id="email" type="email" {...register("email")} />
                                <span className="text-red-400">{errors.email?.message}</span>
                            </div>

                            <div className="mt-5">
                                <Label htmlFor="email">Password</Label>
                                <Input placeholder="Enter your password" id="password" type="password" {...register("password")} />
                                <span className="text-red-400">{errors.password?.message}</span>
                            </div>

                            <div className="mt-5">
                                <Button className="bg-green-600 w-full" disabled={loading}>{loading ? "processing" : "Continue"}</Button>
                            </div>
                            {/* <h1 className="text-center my-2 text-xl font-bold"> -- OR --</h1>

                           <Button variant={"outline"} className="w-full">
                                <Images
                                    src="/images/google.png"
                                    width={40}
                                    height={40}
                                    alt="google_logo"
                                    className="mr-5"
                                />
                                Continue with Google
                            </Button> */}
                        
                            <div className="mt-5 flex">
                                Dont have an account ?
                                <SignupModal/>
                            </div>
                        </form>
                        
                        </div>
                    </AlertDialogDescription>

                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>

     );
 }
  
 export default LoginModal;
