"use client";

import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { states } from '@/config/states'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function HomeForm() {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<File | null>(null)

    const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if(file) {
            setImage(file)
        }
    };

  return (
    <form action="">
        <div className="grid grid-cols-1 mt-4 mx-40">

           {/* Field Name  */}
            <div className="mt-8">
                <Label htmlFor="title" >Field Name</Label>
                <Input id="title" placeholder="Enter Your Field Name ..." />
                <span className="text-red-500"></span>
            </div>
            <br />

            {/* States */}
            <div className="mt-6">
                <Label htmlFor="state">State</Label>
                <select id="state" className="rounded-md outline-red-400 h-9 px-3 py-2 w-full border flex ">
                    <option value=""> -- Select States -- </option>
                    {states.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
                </select>
                <span className="text-red-500"></span>
            </div>
            <br/>

            {/* City */}
            <div className="mt-6">
                <Label htmlFor="city" >City</Label>
                <Input id="city" placeholder="Enter Your City Name ..." />
                <span className="text-red-500"></span>
            </div>
            <br />

            {/* Contact Number */}
            <div className="mt-6">
                <Label htmlFor="contact_number" >Contact Number</Label>
                <Input type="number" id="contact_number" placeholder="Enter Your Contact Number ..." />
                <span className="text-red-500"></span>
            </div>
            <br />

            {/* Image */}
            <div className="mt-6">
                <Label htmlFor="image" >Image</Label>
                <Input id="image" type="file" onChange={handleImageChange}/>
                <span className="text-red-500"></span>
            </div>
            <br />

            {/* Description */}
            <div className="mt-6  ">
                <Label htmlFor="description" >Description</Label>
                <ReactQuill theme="snow" value={description} onChange={setDescription} />
                <span className="text-red-500"></span>
            </div>

            <div className='mt-6 mb-20'>
                <Button className='bg-red-500 w-full ' >
                    Submit
                </Button>
            </div>
        </div>
    </form>
  )
}
