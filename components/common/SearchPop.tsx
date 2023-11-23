"use client"

import React , {useState} from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,  
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Button } from '../ui/button'
  import { Input } from '../ui/input'
  import SearchSheetNav from '../base/SearchSheetNav'
  import { useRouter } from 'next/navigation'

export default function SearchPop({session}: {session:any}) {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const [search, setSearch] = useState<string>("");
  const handleSubmit = () => {
    // console.log("search value is", search)
    router.replace(`/?state=${search}`);
    setOpen(() => false);
  };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };

  return (
    <div>
        <Sheet open={open}>
            <SheetTrigger asChild>
            <div  className=" flex w-full my-auto gap-1 cursor-pointer" onClick={() => setOpen(true)}>
                <Input type="search" placeholder="Search" />
                    <Button type="submit" className="hidden md:inline-flex">
                    Search
                    </Button>
            </div>
            </SheetTrigger>
            <SheetContent side={"top"}>
            <SheetHeader>
                <SheetTitle>
                    <SearchSheetNav session={session} searchInputCallback={setSearch}/>
                    <div className='flex items-center justify-center space-x-4 my-5'>
                        <Button className='bg-red-500' onClick={handleSubmit}>
                            Search
                        </Button>
                        <Button variant={"outline"} onClick={() => setOpen(false)}>
                            Close
                        </Button>
                    </div>
                </SheetTitle> 
            </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}
