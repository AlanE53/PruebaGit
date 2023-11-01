import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'

import computerRoutes from './routes/computer.routes.js';

const app = express()
app.use(express.json());

const connectDB = async () => {
  try {
    // await mongoose.connect(`${dbUrl}/${dbName}`);
    await mongoose.connect(process.env.MONGOOSE_KEY, {
      useNewUrlParser: true
    });
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Login Page')
})

app.get('/home', (req, res) => {
  res.send('Home Page')
})

app.use("/computers", computerRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})