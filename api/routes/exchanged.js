const express = require ("express");
const router = express.Router();
const Exchanged = require ("../models/Exchanged.js");




router.post('/swipe', (req,res,next) => {

  Exchanged.create({...req.body}).then( exchanged => 
    res.status(200).json({exchanged})
    ).catch(error => {
      error.action = 'Error while create category'
      next(error)
    });
}) 

router.post(
  "/acceptExchanged",
  (req, res, next) => {
    const { _id } = req.body;
    console.log('id',_id)
    Exchanged.findByIdAndUpdate(_id, { $set: { ...req.body } }, { new: true })
      .then(user => {
       
        res.status(200).json({ user });
      })
      .catch(error => {
        error.action = "Error al subir una imagen";
        next(error);
      });
  }
);


router.get('/', (req,res,next) => {

  Exchanged.find().then( exchanged => 
    res.status(200).json({exchanged})
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
      error.action = 'Error while create category'
      next(error)
    });
}) 

router.post(
  "/acceptExchanged",
  (req, res, next) => {
    const { _id } = req.body;
    console.log('id',_id)
    Exchanged.findByIdAndUpdate(_id, { $set: { ...req.body } }, { new: true })
      .then(user => {
       
        res.status(200).json({ user });
      })
      .catch(error => {
        error.action = "Error al subir una imagen";
        next(error);
      });
  }
);


module.exports = router;