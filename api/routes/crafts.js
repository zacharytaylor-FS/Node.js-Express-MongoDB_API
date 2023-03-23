const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Craft = require('../models/craft')

//* Create New Craft
router.get('/findAll',(req, res, next) => {
  Craft.find()
    .then(result => {
      res.status(200).json({
        message: "Get Craft(s)",
        user: {
          name: result.name,
          email: result.email,
          id: result._id
        },
        metadata: {
          host: req.hostname,
          method: req.method
        }
      })
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({
        error: {
          message: err.message,
          status: err.status
        }
      })
    });
 
});
router.post('/create', (req, res, next) => {
  Craft.find()
    .then(result => {
      res.status(201).json({
        message: 'Create'
      })
    })
    .catch()
  res.status(201).json({
      message: 'Crafts - POST'
    });
})
router.get('/:craft_id', (req, res, next) => {
  res.json({
      message: 'Crafts - GET by ID'
    });
})
router.put('/update/:craft_id', (req, res, next) => {
  res.json({
      message: 'Crafts - PUT'
    });
})
router.delete('/:craft_id', (req, res, next) => {
  res.json({
      message: 'Crafts - PUT'
    });
})



module.exports = craftsRouter