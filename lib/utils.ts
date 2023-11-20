import Env from "@/config/env";
import { type ClassValue, clsx } from "clsx"
import Image from "next/image";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function bytestoMb(bytes:number):number {
  const MB = 1048576;
  return bytes/MB;
}

export function generateRandomNumber(): number {
  const min = 2000;
  const max = 20000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getImageUrl(image: string): string {
  return `${Env.SUPABASE_URL}/storage/v1/object/public/${Env.BP_BUCKET}/${image}`;
}

export function capitalizeFirstLetter(data:string):string {
  return `${data.charAt(0).toLocaleUpperCase()}${data.slice(1)}`;
}