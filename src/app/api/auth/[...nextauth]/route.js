import { User } from '@/app/models/User'
import mongoose from 'mongoose'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  secret: process.env.SECRET_KEY || 'dgzdjv;ruv56jhgsdug',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "text@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('cred', credentials);
        const { email } = credentials;
      
        mongoose.connect('mongodb+srv://hanna:RA3149tap@my-app.dqhq5yu.mongodb.net/');
        
        const user = await User.findOne({email});
        if(user) {
          return user;
        }

        return null;
      }
    })
  ]
})

export { handler as GET, handler as POST }