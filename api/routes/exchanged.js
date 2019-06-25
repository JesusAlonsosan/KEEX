const express = require ("express");
const router = express.Router();
const Exchanged = require ("../models/Exchanged.js");


router.post('/', (req,res,next) => {

  Exchanged.create({...req.body}).then( exchanged => 
    res.status(200).json({category})
    ).catch(error => {
      error.action = 'Error while create category'
      next(error)
    });
}) 


router.get('/', (req,res,next) => {

  Exchanged.find().then( exchanged => 
    res.status(200).json({category})
    ).catch(error => {
      error.action = 'Error while find category'
      next(error)
    });
}) 


router.patch('', (req,res,next) => {

  let {id}= req.params
  let category = req.body

  Exchanged.findByIdAndUpdate({_id:id}, { $set: {...exchanged} }, { new: true }).then(exchanged => 
    res.status(200).json({exchanged})
    ).catch(error => {
      error.action = 'Error while edit category'
      next(error)
    });
}) 





module.exports = router;