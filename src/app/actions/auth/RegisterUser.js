"use server"
import dbConnect from "@/lib/dbConnect"
import bcrypt from "bcrypt";

export const RegisterUser=async(payload)=>{
const userCollection=await dbConnect("userInfo")
// validation
const {email,password}=payload
if(!email || !password){
    return {success : false}
}
const user = await userCollection.findOne({email : payload.email})
if(!user){
   const hashPassword= await bcrypt.hash(password,10)
   payload.password= hashPassword
   payload.role="user"
   const result=  await userCollection.insertOne(payload)
   console.log(result , "register result ===============>");
   return { success: true, insertedId: result.insertedId.toString() };
}
return {success : false}
}