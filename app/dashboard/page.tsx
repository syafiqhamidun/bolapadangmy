import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import NavBar from '@/components/base/NavBar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { getImageUrl } from '@/lib/utils'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DeleteHomeButton from '@/components/DeleteHome'
import Toast from '@/components/common/toast'
import Link from 'next/link'

export default async function dashboard() {
  const supabase =  createServerComponentClient({cookies})
  const user = await supabase.auth.getUser()
  const {data:homes , error} = await supabase.from("homes").select("id , state , image , title , city , contact_number , description , created_at")
  .eq("user_id" , user.data.user?.id)

  return (
    <div>
      <NavBar/>
      <Toast/>
      <div className='mx-5 lg:container mt-10'>
      <Table>
        <TableCaption>A list of your fields.</TableCaption>
        <TableHeader>
        <TableRow>
          <TableHead>State</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
          {homes && 
            homes.map((item) => (
                      <TableRow key={item.id}>
                      <TableCell>{item.state}</TableCell>
                      <TableCell>{item.city}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>0{item.contact_number}</TableCell>
                      <TableCell>
                          <Image 
                              className='h-12 w-12 rounded-full'
                              src={getImageUrl(item.image)}
                              width={60} 
                              height={60} 
                              alt="home_img" />
                      </TableCell>
                      <TableCell>
                        <div className='flex space-x-3'>
                          <DeleteHomeButton id={item.id} />
                          <Link href={`/home/${item.id}`}>
                            <Button size={"icon"} className='bg-green-600'>
                              <Eye/>
                            </Button>  
                          </Link>

                        </div>
                      </TableCell>
                      </TableRow>
          ))}
          </TableBody>
      </Table>
      </div>

    </div>
  )
}
