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
import { Button } from '../ui/button'  
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';


export default function SignOutModal() {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const logout = async() => {
        await supabase.auth.signOut()
        router.refresh()
    }

  return (
    <div>
        <AlertDialog>
  <AlertDialogTrigger>
    <li>
        <Button variant={"miss"} className=" w-64 hover:bg-gray-300 flex rounded-md">SignOut</Button> 
    </li>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will logged out from your current page.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-red-400" onClick={logout}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

