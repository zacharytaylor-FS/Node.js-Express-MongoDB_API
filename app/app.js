const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const {connection} = require('../api/db/db')
const userRouter = require('../api/routes/users');
const craftsRouter = require('../api/routes/crafts');

//* middleware for logger
app.use(morgan("dev"));

//* middleware to handle payload
app.use(express.urlencoded({
  extended: true
}));

//* middleware returns json
app.use(express.json());

app.use(cors())

//* http://localhost:8080
app.get('/', (req, res, next) =>{ 
  res.status(200).json({message: 'Service is up'})
});

//* Routes
app.use('/crafts', craftsRouter)
app.use('/users', userRouter)

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

connection()
module.exports= app