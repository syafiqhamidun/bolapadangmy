import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import LoginModal from "../aut/LoginModal"
import SignOutModal from "../aut/SignOutModal"
import Link from "next/link"
import AddHome from "@/app/add-home/page"
 
export function NavMenu({session}:{session:object | null}) {
  return (
    <div className="flex justify-end mr-2">
        <Popover>
      <PopoverTrigger asChild className="flex ">
        <Button variant="outline" className="inline-flex w-40 justify-center gap-x-5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-50">WELCOME</Button>
      </PopoverTrigger>
      <PopoverContent className="mr-6">
            <ul>
                {session != null ? (<>
                  <li>
                    <Link href={"/dashboard"}>
                      <Button variant={"miss"} className="w-full hover:bg-gray-300 flex rounded-md">Dashboard</Button>      
                    </Link>

                </li>
                <li>
                  <Link href={"/add-home"}>
                      <Button variant={"miss"} className="w-full hover:bg-gray-300 flex rounded-md">Add Field</Button> 
                  </Link>
                  
                </li>
                <SignOutModal/>
                
                </> ):( <>
                <LoginModal/>
                {/* <li>
                    <Button variant={"miss"} className="w-full hover:bg-gray-300 flex rounded-md"></Button>
                </li> */}
                </>)}
            </ul>
      </PopoverContent>
    </Popover>
    </div>
    
  )
}
