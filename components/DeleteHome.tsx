"use client";

import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from './ui/button';
  import { Trash } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
  

export default function DeleteHomeButton({id} : {id:number}) {
    const supabase = createClientComponentClient()
    const router = useRouter();
    const deleteHome = async () => {
        const {error} = await supabase.from("homes").delete().eq("id", id)
        if(error) {
            toast.error(error?.message, {theme: "colored"});
            return;
        }
        router.refresh()
    };

  return (
    <div>
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={"destructive"} size={"icon"} className=''>
                    <Trash/>
                </Button>
        </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your field data
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className='bg-red-400' onClick={deleteHome}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}
