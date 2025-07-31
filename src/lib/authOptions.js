import { LoginUser } from "@/app/actions/auth/LoginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "./dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
providers: [
    CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "email", type: "email", placeholder: "write a email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        // console.log(credentials);
        const user=await LoginUser(credentials)
        console.log(user ,"user================>");

      if (user) {
        
        return user
      } else {
      
        return null
      }
    }
  }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),
    GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
],
pages:{
      singIn: "/login"
},
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    // console.log({ user, account, profile, email, credentials });
    if(account){
        const {providerAccountId,provider}=account
        const {email: user_email ,image,name}=user
        const userCollection=  dbConnect("userInfo")
        const isExisted= await userCollection.findOne({providerAccountId})
        if(!isExisted){
            const payload= {providerAccountId, provider, email: user_email,image,name}
            await userCollection.insertOne(payload)
        }
    }



    return true
  }
  }

}