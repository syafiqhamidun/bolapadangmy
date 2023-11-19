import { Link } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { getImageUrl } from '@/lib/utils'

export default function HomeCard({ home }: { home: any }){
  return (
    <Link href={`/home/${home.id}`}>
        <div>
            <Image 
                className='w-full h-[300px] rounded-xl object-cover object-center'
                src={getImageUrl(home.image)}
                width={100} 
                height={100} 
                alt={home.image} />
                <p>{home.city} , {home.state}</p>
                <p>{home.title}</p>
                <p>{home.contact_number}</p>
        </div>
    </Link>
  )
}
