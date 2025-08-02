
import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"


export const POST=async(req,{params})=>{
   const data=await req.json()
   const bookingCollection =dbConnect("bookings")
   const result= await bookingCollection.insertOne(data)
   return NextResponse.json(result)
}