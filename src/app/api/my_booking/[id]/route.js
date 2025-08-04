import { authOptions } from "@/lib/authOptions"
import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET =async(req,{params})=>{
//     const p= await params
//     const query= {_id : new ObjectId(p.id)}

//    const bookingCollection= dbConnect("bookings")
//       const result= await bookingCollection.findOne(query)
//       return NextResponse.json(result)

    const p= await params
    const query= {_id : new ObjectId(p.id)}
    const session= await getServerSession(authOptions)
    const email= session?.user?.email
    const bookingCollection= dbConnect("bookings")
    const currentBookings= await bookingCollection.findOne(query)
    console.log({email}, "booking email",currentBookings?.email);
    const isOwnerOK= email == currentBookings?.email
    
    if(isOwnerOK){

        const result= await bookingCollection.findOne(query)
        return NextResponse.json(result)
    }  else{
        return NextResponse.json({ success: false, message: "Forbidden access" }, { status: 403 })
    }
}

export const PATCH=async(req,{params})=>{
    const p= await params
    const query= {_id : new ObjectId(p.id)}
    const body= await req.json()
    const session= await getServerSession(authOptions)
    const email= session?.user?.email
    const bookingCollection= dbConnect("bookings")
    const currentBookings= await bookingCollection.findOne(query)
    const isOwnerOK= email == currentBookings?.email
    if(isOwnerOK){
     const option={
        upsert: true
    }
    const filter={
        $set:{...body}
    }
    const result= await bookingCollection.updateOne(query, filter,option)
    revalidatePath("/my-bookings")
    return NextResponse.json(result)
    }
    else{
        return NextResponse.json({ success: false, message: "Forbidden access" }, { status: 403 })
    }
  
}