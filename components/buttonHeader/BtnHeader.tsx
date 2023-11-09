import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
export function PopoverDemo() {
  return (
    <div className="flex justify-end mr-6">
        <Popover>
      <PopoverTrigger asChild className="flex ">
        <Button variant="outline" className="inline-flex w-48 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-2 ring-inset ring-gray-300 hover:bg-gray-50">WELCOME</Button>
      </PopoverTrigger>
      <PopoverContent className="mr-6">

            <ul>
                <li>
                   <Button variant={"miss"} className="w-full hover:bg-gray-300 flex rounded-md">Sign In</Button> 
                </li>
                <li>
                    <Button variant={"miss"} className="w-full hover:bg-gray-300 flex rounded-md">Sign Out</Button>
                </li>
            </ul>
      </PopoverContent>
    </Popover>
    </div>
    
  )
}
