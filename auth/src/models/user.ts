import mongoose from 'mongoose';
import { Password } from '../services/password';

// interface for properties required to create a new user User Schema
interface UserAttrs {
  email: string;
  password: string;
}

// interfce for the properties used in  -userSchema.statics.build - User Model
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// interface for the properties that a user document has (timestamp ecc..) from DB User Document
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  // if the DB creates extra attributes for a user, you can add them here
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// not arrow function to refer This as an inside parameter,
// isModified is a mongo DB method to check if the password in db is inserted / modified
userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hased = await Password.toHash(this.get('password'));
    this.set('password', hased);
    done();
  }
});

// this function makes the schema but before it checks the parameters specified in the interface !!!
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
