import Link from 'next/link';
import  React from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';

export default function HomeCard({ home }: { home: any }){

  return (
    <Link href={`/home/${home.id}`} className='z-10'>
        <div>
            <Image 
                className="w-full h-[300px] rounded-xl object-cover object-center blur-none"
                src={getImageUrl(home.image)}
                width={100} 
                height={100} 
                alt={home.image} 
                unoptimized
                priority
                />

                <p className='text-xl font-bold mt-3'>{home.title}</p>
                <p>{home.city} , {home.state}</p>
                {/* <p>0{home.contact_number}</p> */}

        </div>
    </Link>
  );
}

