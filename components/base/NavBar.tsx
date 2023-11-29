import { Button } from "../ui/button";
import { NavMenu } from "./NavMenu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import Link from "next/link";
import SearchPop from "../common/SearchPop";
import Image from "next/image";

export default async function NavBar() {
  const supabase = createServerComponentClient({cookies});
  const session = await supabase.auth.getSession()
  
  return ( 
  
  <header className="sticky top-0 grid grid-cols-3 lg:grid-cols-3 bg-white shadow-md p-5 md:px-10 gap-7 z-50">

    {/* Left */}
      <div className="w-1/8 h-10 my-auto sm:justify-start">
        <Link href={"/"} className="cursor-pointer flex gap-10">
          <Image src="/field.jpeg" alt="field" height={80} width={80} className="py-0 "/>
          <Button variant={"miss"} className=" w-26 md:w-1/2 lg:w-24 py-2 rounded-md cursor-pointer flex-row items-center text-xs lg:text-xl md:text-xl font-exo font-semibold">
              BolaPadang.MY
          </Button>
        </Link>
      </div>

    {/* Middle */}
      <div className="my-auto w-auto gap-1">
        <SearchPop session={session.data?.session}/>
      </div>

    {/* Right */}
    <div>

      <NavMenu session={session.data?.session} />
    </div>

  </header> 

  );
}
 