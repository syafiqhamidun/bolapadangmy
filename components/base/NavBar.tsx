import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Fragment } from 'react'
import { NavMenu } from "./NavMenu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import SignupModal from "../aut/SignupModal";

export default async function NavBar() {
  const supabase = createServerComponentClient({cookies});
  const session = await supabase.auth.getSession()
  
  return ( 
  
  <header className="sticky top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

    {/* Left */}
      <div className="flex items-center h-10 my-auto">
        <Button variant={"miss"} className=" w-full md:w-auto py-2 rounded-md cursor-pointer flex-row items-center text-xl font-exo font-semibold">
            MyPasar
        </Button>
      </div>

    {/* Middle */}
      <div className=" flex my-auto w-full gap-1">
        <Input type="search" placeholder="Search" />
          <Button type="submit" className="hidden md:inline-flex">
              Search
          </Button>
      </div>

    {/* Right */}
    <div>
      <NavMenu session={session.data?.session} />
    </div>

  </header> 

  );
}
 