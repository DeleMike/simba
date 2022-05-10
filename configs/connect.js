const mongoose = require('mongoose');

/**
 * Connect to database
 */
const connectDb = (url) => {
   return mongoose.connect(url, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      }),
      () => {
         console.log('connected to db!');
      }
}

module.exports = connectDb;