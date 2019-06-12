const express = require ("express");
const router = express.Router();
const Category = require ("../models/Category");


router.post('/add', (req,res,next) => {

  Category.create({...req.body}).then(category => 
    res.status(200).json({category})
    ).catch(error => {
      error.action = 'Error while create category'
      next(error)
    });
}) 


router.get('/addAll', (req,res,next) => {

  Category.find().then(category => 
    res.status(200).json({category})
    ).catch(error => {
      error.action = 'Error while find category'
      next(error)
    });
}) 


router.patch('/:id/edit', (req,res,next) => {

  let {id}= req.params
  let category = req.body

  Category.findByIdAndUpdate({_id:id}, { $set: {...category} }, { new: true }).then(category => 
    res.status(200).json({category})
    ).catch(error => {
      error.action = 'Error while edit category'
      next(error)
    });
}) 





module.exports = router;
