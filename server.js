require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');

const connectDb = require('./configs/connect');

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

const start = () => {
   try {
      connectDb(process.env.MONGO_URI);
      app.listen(port, ()=> console.log(`server running on http:localhost:${port}`));
   } catch (error) {
      console.log('An error happened while connecting to the database: ' + error);
   }
}

start();
