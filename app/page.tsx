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

{/* Load the home card */}
      {homes && homes.length > 0 && 
      homes.map((item) => (<HomeCard home={item} key={item.id} />) )}
    </div>
  )
}
