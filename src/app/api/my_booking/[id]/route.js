import { authOptions } from "@/lib/authOptions"
import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export const GET =async(req,{params})=>{
    const p= await params
    const query= {_id : new ObjectId(p.id)}
//    const session= await getServerSession(authOptions)
   const bookingCollection= dbConnect("bookings")
      const result= await bookingCollection.findOne(query)
      return NextResponse.json(result)
}