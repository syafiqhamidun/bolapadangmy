import NavBar from '@/components/base/NavBar'
import React from 'react'
import Image from 'next/image'

export default function AddHome() {
  return (
    <div>
      <NavBar/>
      <div className=" mx-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-300 max-w-full">
          <div>
            <h1 className="text-green-800 text-start font-bold text-7xl">MALAYSIAN AMATEUR FOOTBALL FIELD</h1>
            <h1 className="text-black font-semibold text-3xl mb-3 mt-14">
              The first online football field service in Malaysia
            </h1>

            <Image 
                src="/images/padangbola.jpeg" 
                width={300} 
                height={300}
                alt= "footbal-field"
                />

            <div className="flex space-x-4 items-center mt-80 ">
              <strong className="text-3xl">FOOTBALL IS FOR EVERYONE</strong>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-2 mt-5">

            </div>
          </div>
          <div className="">
          </div>
        </div>
      </div>
    </div>
  )
}
