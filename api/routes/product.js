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

//Swipe ra
router.post('/getProductSwipe/', (req,res,next) => {
let {id}= req.body
Product.count({_owner:{$ne: id}}, function( err, count){
  console.log( "Number of users:", count );
  let random = Math.floor(Math.random() * count)
  console.log( "Number of users:", random );
  Product.findOne({_owner:{$ne: id}}).skip(random).then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while find product'
      next(error)
    });
})


}) 


router.post('/getAllProduct', (req,res,next) => {
  let{id}=req.body
  Product.find({_owner:{$ne: id}}).then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while find product'
      next(error)
    });
}) 


router.post('/getProductByUser/', (req,res,next) => {
  let {id}= req.body
  Product.find({_owner:id}).then(product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while find product'
      next(error)
    });
}) 


router.post('/getProductsByCategory/:id',(req,res,next)=>{
  let {id} = req.params
  let {_id} = req.body
  Product.find({category:id,_owner:{$ne: _id}}).then(products=>
    res.status(200).json({products})).catch(error => {
      error.action = 'Error while find product by category'
      next(error)
    });
})


router.patch('/:id/edit', (req,res,next) => {

  let {id}= req.params
  let product = req.body
  
  Product.findByIdAndUpdate({_id:id}, { $set: {...product} }, { new: true }).then (product => 
    res.status(200).json({product})
    ).catch(error => {
      error.action = 'Error while edit product'
      next(error)
    })
})



module.exports = router;