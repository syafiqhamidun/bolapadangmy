
import NavBar from "@/components/base/NavBar"
import Toast from "@/components/common/toast"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import HomeCard from "@/components/common/homeCard"


export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const {data:homes , error} = await supabase.from("homes").select("id , title , image , state , city , contact_number , users (metadata->name)");

  return (
    <div>
      <Toast/>
      <NavBar/>


      {homes && homes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-10">
          {homes.map((item) => <HomeCard key={""} home={item} />)}
        </div>
      )}


    </div>
  )
}

