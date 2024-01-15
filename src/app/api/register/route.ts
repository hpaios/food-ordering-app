import { User } from "./../../models/User"
import mongoose from 'mongoose'

export async function POST(req: Request) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL || "mongodb+srv://hanna:RA3149tap@my-app.dqhq5yu.mongodb.net/")
  const createdUser = await User.create(body)
  return Response.json(createdUser)
}