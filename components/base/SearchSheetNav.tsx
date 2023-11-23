import React from 'react'
import {Input} from '../ui/input'
import { NavMenu } from './NavMenu'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function SearchSheetNav({session , searchInputCallback} : {session:any , searchInputCallback:(value:string)=> void}) {
  
  return (
    <div className='flex justify-between items-center px-10'>
      <div className="flex items-center h-10 my-auto">
        <Link href={"/"} className="cursor-pointer">
          <Button variant={"miss"} className=" w-full md:w-auto py-2 rounded-md cursor-pointer flex-row items-center text-xl font-exo font-semibold">
              BolaPadang.MY
          </Button>
        </Link>
      </div>

      <div  className='w-full md:w-1/3 rounded-md p-5' >
        <Input placeholder='Search ....' onChange={(event)=> searchInputCallback(event.target.value)}/>
      </div>

        <div className='md:flex items-center space-x-4' placeholder='Search by State'>
          <NavMenu session={session} />
        </div>
    </div>
  )
}
