
import { authOptions } from "@/lib/authOptions"
import dbConnect from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"



export const GET =async(req)=>{
   const session= await getServerSession(authOptions)
   if(session){
      const email=session?.user?.email
      const bookingCollection= dbConnect("bookings")
      const result= await bookingCollection.find({email}).toArray()
      return NextResponse.json(result)
   }
   return NextResponse.json([])
}


export const POST=async(req,{params})=>{
   const data=await req.json()
   const bookingCollection =dbConnect("bookings")
   const result= await bookingCollection.insertOne(data)
   return NextResponse.json(result)
}