
import NavBar from "@/components/base/NavBar"
import Toast from "@/components/common/toast"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import HomeCard from "@/components/common/homeCard"


export default async function Home({searchParams}:{searchParams?:{[key:string]:string | undefined}}) {
  const supabase = createServerComponentClient({cookies})
  const query = supabase
    .from("homes")
    .select("id , title , image , state , city , contact_number , users (metadata->name)");

    if(searchParams?.state) {
      query.ilike ("state" , `%${searchParams?.state}%` )
    }
    // if(searchParams?.city) {
    //   query.ilike ("city" , `%${searchParams?.city}%` )
    // }
    // if(searchParams?.title) {
    //   query.ilike ("title" , `%${searchParams?.title}%` )
    // }
  
  const {data:homes , error} = await query;

  return (
    <div>
      <Toast/>
      <NavBar/>

      <div className="mt-20">
        {homes && homes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-10">
            {homes.map((item) => <HomeCard key={""} home={item} />)}
          </div>
        )}
      </div>
        {homes && homes.length < 0 && (
          <div>
            <h1 className="text-2xl text-red-500">No Field Found</h1>
          </div>
        )}
    </div>
  )
}

