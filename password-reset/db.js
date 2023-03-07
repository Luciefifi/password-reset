const mongoose = require('mongoose');
let DB_URL = process.env.DB_URL;

module.exports = async function connection() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
      autoIndex: true,
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
  }
};

