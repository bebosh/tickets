import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
// @ts-ignore
let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  process.env.JWT_KEY = 'asdfj';
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  // @ts-ignore
  await mongo.stop();
  await mongoose.connection.close();
});
