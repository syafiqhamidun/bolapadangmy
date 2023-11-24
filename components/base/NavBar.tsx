import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { NavMenu } from "./NavMenu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import Link from "next/link";
import SearchPop from "../common/SearchPop";

export default async function NavBar() {
  const supabase = createServerComponentClient({cookies});
  const session = await supabase.auth.getSession()
  
  return ( 
  
  <header className="sticky top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

    {/* Left */}
      <div className=" items-center h-10 my-auto hidden sm:block">
        <Link href={"/"} className="cursor-pointer">
          <Button variant={"miss"} className=" w-full md:w-auto py-2 rounded-md cursor-pointer flex-row items-center text-xl font-exo font-semibold">
              BolaPadang.MY
          </Button>
        </Link>
      </div>

    {/* Middle */}
      <div className="my-auto w-auto gap-1">
        <SearchPop session={session.data?.session}/>
      </div>

    {/* Right */}
    <div className="">
      <NavMenu session={session.data?.session} />
    </div>

  </header> 

  );
}
 