require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');

const connectDb = require('./configs/connect');
const notFound = require('./errors/not-found');
const taskRouter = require('./src/tasks/routes/tasks');

app.use('/api', taskRouter)

app.use(express.json());
app.use(cors());

app.use(notFound)
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
