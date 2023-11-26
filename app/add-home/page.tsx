import NavBar from '@/components/base/NavBar'
import React from 'react'
import HomeForm from '@/components/HomeForm'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image';

export default function AddHome() {
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <div className=" mx-16 mt-10">
      <h1 className="text-black font-bold text-4xl text-center">MALAYSIAN AMATEUR FOOTBALL FIELD</h1>
        <div className="grid grid-cols-1 max-w-full">
          <div>
            
            <h1 className="text-black font-semibold text-xl mb-3 mt-14 justify-center flex text-center">
              The first online football field service in Malaysia
            </h1>

            <div className="flex space-x-4 items-center mt-10 justify-center text-center">
              <strong className="text-3xl">FOOTBALL IS FOR EVERYONE</strong>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-2 mt-5">

            </div>
            <div>
              <Image 
              src="/field.jpeg"
              alt="field"
              width={300}
              height={300}

              />
            </div>
          </div>
          <div className="text-center">
            <HomeForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
