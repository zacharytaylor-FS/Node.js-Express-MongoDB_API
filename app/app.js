const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose');
const userRouter = require('../api/routes/users');
const craftsRouter = require('../api/routes/crafts');
// const cors = require('cors');
require('dotenv').config();


//* middleware for logger
app.use(morgan("dev"));

//* middleware to handle payload
app.use(express.urlencoded({
  extended: true
}));

//* middleware returns json
app.use(express.json());
//* Routes
app.use('/crafts', craftsRouter)
app.use('/users', userRouter)
// app.use(cors())
app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, Authorization");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "POST,PUT,GET,PATCH,DELETE")
    }
    next();
})

//* http://localhost:8080
app.get('/', (req, res, next) =>{ 
  res.status(200).json({message: 'Service is up'})
});

//! ERRORS
//* Middleware to handle errors and bad url path
app.use((req, res, next) => {
  const error = new Error('NOT FOUND!');
  error.status = 404;
  next(error)
})

app.use((error,req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    }
  });
});

mongoose.connect(process.env.MONGODB).catch(error => console.log(error))
module.exports= app