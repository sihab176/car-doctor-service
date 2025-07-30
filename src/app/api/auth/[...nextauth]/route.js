import { LoginUser } from "@/app/actions/auth/LoginUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

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
        // const user= " erljjhfjolfjsfjosjh"

      if (user) {
        
        return user
      } else {
      
        return null


      }
    }
  })
],
pages:{
      singIn: "/login"
}
}
const handler= NextAuth(authOptions)
export { handler as GET , handler as POST }