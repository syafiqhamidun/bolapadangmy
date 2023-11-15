import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function bytestoMb(bytes:number):number {
  const MB = 1048576;
  return bytes/MB;
}