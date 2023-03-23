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
        
      })
    })
    .catch();
  res.json({
    message: 'Crafts - GET ALL'
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