import { User } from '@/models/User'
import mongoose from 'mongoose'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/libs/mongoConnect"

export const authOptions =  {
  secret: process.env.SECRET_KEY || 'dgzdjv;ruv56jhgsdug',
  providers: [
    CredentialsProvider({
      adapter: MongoDBAdapter(clientPromise),
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "text@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
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
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }