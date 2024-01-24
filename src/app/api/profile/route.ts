import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { User } from '@/models/User'

export async function PUT(req: Request) {
  mongoose.connect(process.env.MONGO_URL || "mongodb+srv://hanna:RA3149tap@my-app.dqhq5yu.mongodb.net/");
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const update = {
    name: '',
    image: ''
  };

  if('name' in data) {
    update.name = data.name;
  }

  if('image' in data) {
    update.image = data.image;
  }

  if(Object.keys(update).length > 0) {
     await User.updateOne({email}, update)
  }

  return Response.json(true);
}