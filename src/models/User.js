// import bcrypt from 'bcrypt';
import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {
    type: String,
    required: true,
    validate: pass => {
      if(!pass?.length || pass.length < 5) {
        new Error('password must be at least 5 characters')
        return false
      }
    }
  },
  name: {type: String},
  image: {type: String}
}, {timestamps: true});

// TODO: fix bcrypt
// UserSchema.post('validate', function(user) {
//   const notHashedPass = user.password;
//   const salt = bcrypt.genSaltSync(10);
//   user.password = bcrypt.hashSync(notHashedPass, salt);
// })

export const User = models?.User || model('User', UserSchema);