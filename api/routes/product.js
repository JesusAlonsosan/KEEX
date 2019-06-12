const express = require('express')
const router = express.Router()
const Product = require ("../models/Product");



router.post('/new', (req,res,next) => {
  console.log('----------------------------------------',req.body)
  Product.create({...req.body}).then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while create product'
      next(error)
    });
}) 



router.get('/newProduct', (req,res,next) => {

  Product.find().then(category => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while find product'
      next(error)
    });
}) 



router.patch('/:id/edit', (req,res,next) => {

  let {id}= req.params
  let product = req.body

  Product.findByIdAndUpdate({_id:id}, { $set: {...category} }, { new: true }).then (product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while edit product'
      next(error)
    })
})



module.exports = router;