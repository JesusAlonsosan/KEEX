const express = require('express')
const router = express.Router()
const Product = require ("../models/Product");
const uploader = require("../helpers/multer");



router.post('/new', (req,res,next) => {
  console.log('----------------------------------------',req.body)
  //const image  = req.files.map(file => file.secure_url);
 // const image  = req.file.secure_url);
  /*Product.create({...req.body}).then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while create product'
      next(error)
    });*/
}) 

router.post('/addProduct',uploader.array("image"), (req,res,next)=>{
  console.log('----------------------------------------',req.body)
  const image  = req.files.map(file => file.secure_url);
  

  Product.create({...req.body, image}).then(product =>{
          res.status(200).json({product});
  }).catch(error=>{
    error.action = "Error while creating user";
      next(error);
  })
})


router.get('/getProductSwipe/:id', (req,res,next) => {
let {id}= req.params

  Product.findOne({_owner:{$ne: id}}).then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while find product'
      next(error)
    });
}) 


router.get('/getAllProduct', (req,res,next) => {

  Product.find().then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while find product'
      next(error)
    });
}) 


router.get('/getProductByUser/:id', (req,res,next) => {
  let {id}= req.params
  Product.find({_owner:id}).then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while find product'
      next(error)
    });
}) 


router.get('/getProductsByCategory/:id',(req,res,next)=>{
  let {id} = req.params
  
  Product.find({category:id}).then(products=>
    res.status(200).json({products})).catch(error => {
      error.action = 'Error while find product by category'
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