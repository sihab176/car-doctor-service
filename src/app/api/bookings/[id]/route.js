import { authOptions } from "@/lib/authOptions"
import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"


export const DELETE=async(req,{params})=>{
    const session= await getServerSession(authOptions)
    const bookingCollection= dbConnect("bookings")
      const email=session?.user?.email
      const p= await params
      const query={_id: new ObjectId(p.id)}
      const currentBookings= await bookingCollection.findOne(query)
      const isOwnerOK=  email == currentBookings?.email
      if(isOwnerOK){

          const result= await bookingCollection.deleteOne(query)
          revalidatePath("/my-bookings")
          return NextResponse.json(result)
      }
      else{
        return NextResponse.json({ success: false, message: "Forbidden access" }, { status: 401 })
      }
}