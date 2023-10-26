import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'

import Computer from './models/computer.model.js';

const app = express()
app.use(express.json());

const port = 3000

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

app.get('/computers', async (req, res) => {
  const computers = await Computer.find({}); 

  res.send(computers);
});

app.post('/computers', async (req, res) => {
  const {name, price} = req.body;
  const newComputer = new Computer({
    name,
    price  
  })

  await newComputer.save();

  res.status(200).send({
    ok: true,
    message: "Computer added successfully"
  })
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})