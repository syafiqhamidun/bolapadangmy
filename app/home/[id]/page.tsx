import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { cookies } from 'next/headers'
import NavBar from '@/components/base/NavBar'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils';

export default async function FindHome({params}:{params:{id:number}}) {
    const supabase = createServerComponentClient({cookies})
    const {data , error} = await supabase.from("homes").select("* ,users (metadata->name)").eq("id" , params.id)
    const home:HomesType | null = data?.[0]
    
  return (
    <div className='mb-10'>
        <NavBar/>
        <div className='container mt-10'>

            <Image 
                className="w-full h-[500px] rounded-lg object-cover object-center"
                src={getImageUrl(home?.image)}
                width={100} 
                height={100} 
                alt={"home_img"} 
                unoptimized
                priority
                />

            <h1 className='text-2xl font-bold mt-3'>{home?.title}</h1>
            <p className='mt-2'>
              {home?.city} , {home?.state}
            </p>
            <p className='flex mt-1'>
                    Contact Number = 0{home?.contact_number}
            </p>

            {/* <h1 className='mt-3 text-blue-800 text-xl font-bold'>Created by {home?.users?.name!}</h1> */}

            <h1 className='mt-10 underline text-xl font-semibold'>ABOUT US</h1>
            <div className='mt-2 pb-14' dangerouslySetInnerHTML={{__html:home?.description}}>
                
            </div>
        </div>
    </div>
  )
}
