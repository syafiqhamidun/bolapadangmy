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
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
  

export default async function Dashboard() {
    const supabase = createServerComponentClient({cookies})
    const user = await supabase.auth.getUser()
    const {data, error} = await supabase.from("homes").select("id, image, title, state, city, contact_number, created at")
    .eq("user_id" , user.data.user?.id)

  return (
    <div>
        <NavBar/>
        <div className='container mt-10'>
            <Table>
                <TableCaption>Your Football Fields List</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>State</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>

                </TableBody>
            </Table>
        </div>
  

    </div>
  )
}
