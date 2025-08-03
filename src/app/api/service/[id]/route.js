import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET =async(req,{params})=>{
  try {
    const p= await params;
    const result= await dbConnect("servisesData").findOne({_id : new ObjectId(p?.id)})
      if (!result) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(result)
  } catch (error) {
    console.log(error);
  }
}





