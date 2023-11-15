import NavBar from '@/components/base/NavBar'
import React from 'react'
import Image from 'next/image'
import HomeForm from '@/components/HomeForm'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddHome() {
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <div className=" mx-16 mt-10">
      <h1 className="text-black font-bold text-7xl text-center">MALAYSIAN AMATEUR FOOTBALL FIELD</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-full">
          <div>
            
            <h1 className="text-black font-semibold text-3xl mb-3 mt-14">
              The first online football field service in Malaysia
            </h1>

            <Image 
                src="/Users/syafiqhamidun/Coding/pasarweb/images/padangbola.jpeg" 
                width={300} 
                height={300}
                alt= "football-field"
                />

            <div className="flex space-x-4 items-center mt-10 ">
              <strong className="text-3xl">FOOTBALL IS FOR EVERYONE</strong>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-2 mt-5">

            </div>
          </div>
          <div className="">
            <HomeForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
