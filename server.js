const mongoose = require('mongoose');

const app = require('./app')

require('dotenv').config();

const DB_PATH = process.env.DB_PATH;

mongoose
  .connect(DB_PATH)
  .then(() => 
    app.listen(3000, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });