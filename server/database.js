import mongoose from 'mongoose';

import 'dotenv/config';

const uri = process.env.DATABASE_URL;
console.log(uri);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Connected to MongoDB Atlas with Mongoose!");
});

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
    userName: String,
    userID: String,
    password: String
  });
  
  const User = mongoose.model('User', userSchema);
  export default User;