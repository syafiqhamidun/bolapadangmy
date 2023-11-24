"use client";

import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { states } from '@/config/states'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { AddHomeType, homeSchema } from '@/validations/homeSchema';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { generateRandomNumber } from '@/lib/utils';
import Env from '@/config/env';
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';


export default function HomeForm() {
        const router = useRouter()
    const [description, setDescription] = useState("")
    const [image, setImage] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const supabase = createClientComponentClient()

// Validation
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
      } = useForm<AddHomeType>({
        resolver: yupResolver(homeSchema),
      });

      useEffect(() => {

        setValue("description", description);
      }, [description, setValue]);
    

    const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(file) {
            setImage(file);
            setValue("image", file)
        }
    };

    const onSubmit = async (payload:AddHomeType) => {
        setLoading(true);
        const user = await supabase.auth.getUser()
        const uniquePath = Date.now() + "_" + generateRandomNumber()
        const {data:imageData, error: imgErr} = await supabase.storage.from(Env.BP_BUCKET).upload(uniquePath, image!)

        if (imgErr) {
            setLoading(false)
            toast.error(imgErr.message, {theme:"colored"});
            return;
        }

    const {data:homeData, error: homeErr} = await supabase.from("homes").insert({
        user_id: user.data.user?.id,
        title: payload.title,
        state: payload.state,
        city: payload.city,
        description: payload.description,
        contact_number: payload.contact_number,
        image:imageData?.path
    })

        if(homeErr) {
            setLoading(false)
            toast.error(homeErr.message, {theme:"colored"});
            return;
        }

        router.push("/dashboard?success=Home added successfully !")

    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mt-5 md:container lg:container lg:w-1/2 md:w-1/2">

           {/* Field Name  */}
            <div className="mt-8">
                <Label htmlFor="title" >Field Name</Label>
                <Input className='' id="title" placeholder="Enter Your Field Name ..." {...register("title")}/>
                <span className="text-red-500">{errors?. title?.message}</span>
            </div>
            <br />

            {/* States */}
            <div className="mt-6">
                <Label htmlFor="state">State</Label>
                <select id="state" className="rounded-md outline-red-400 h-10 px-3 py-2 w-full border flex " {...register("state")}>
                    <option value=""> -- Select States -- </option>
                    {states.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
                </select>
                <span className="text-red-500">{errors?. state?.message}</span>
            </div>
            <br/>

            {/* City */}
            <div className="mt-6">
                <Label htmlFor="city" >City</Label>
                <Input id="city" placeholder="Enter Your City Name ..." {...register("city")}/>
                <span className="text-red-500">{errors?. city?.message}</span>
            </div>
            <br />

            {/* Contact Number */}
            <div className="mt-6">
                <Label htmlFor="contact_number" >Contact Number</Label>
                <Input type="number" id="contact_number" placeholder="Enter Your Contact Number ..." {...register("contact_number")} />
                <span className="text-red-500">{errors?.image?.message}</span>
            </div>
            <br />

            {/* Image */}
            <div className="mt-6">
                <Label htmlFor="image" >Image</Label>
                <Input id="image" type="file" onChange={handleImageChange}/>
                <span className="text-red-500">{errors?. image?.message}</span>
            </div>
            <br />

            {/* Description */}
            <div className="mt-6  ">
                <Label htmlFor="description" >Description</Label>
                <ReactQuill theme="snow" value={description} onChange={setDescription} />
                <span className="text-red-500">{errors?. description?.message}</span>
            </div>

            <div className='mt-6 mb-20'>
                <Button className='bg-red-500 w-full ' disabled={loading}>{loading ? "Processing ..." : "Submit"}
                    
                </Button>
            </div>
        </div>
    </form>
  )
}
