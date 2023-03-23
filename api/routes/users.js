const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user')

//* Create New Craft
router.get('/findAll',(req, res, next) => {
  User.find()
    .then(result => {
      res.status(200).json({
        message: "Get User(s)",
        
      })
    })
    .catch();
  res.json({
    message: 'Users - GET ALL'
  });
});

//* POST - create NEW user
router.post('/create', (req, res, next) => {
  
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    artist: req.body.artist,
  })
  newUser.save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "User Saved",
        user:{
          name: result.name,
          email: result.email,
          id: result._id,
          metadata: {
            method: req.method,
            host: req.hostname
          }
        }
      })
    }).catch(err => {
      console.error(err.message);
      res.status(500).json({
        error: {
          message: err.message,
          status: err.status
        }
      })
    });
})
router.get('/:user_id', (req, res, next) => {
  res.json({
      message: 'users - GET by ID'
    });
})
router.put('/update/:user_id', (req, res, next) => {
  res.json({
      message: 'users - PUT'
    });
})
router.delete('/:user_id', (req, res, next) => {
  res.json({
      message: 'users - PUT'
    });
})



module.exports = router