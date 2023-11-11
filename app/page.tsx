import Header from "@/components/header"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({cookies});
  const {data, error} = await supabase.auth.getUser()
  console.log("The data is" , data);

  return (
    <main>
      <Header/>
    </main>
  )
}
