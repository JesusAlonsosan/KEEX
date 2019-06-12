const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

  name: {type:String,required:true},
  inStock:{type:Boolean,default:true},
  category:{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  image:[{
    type:String,
  }],
  description:String,

  
  
},{ timestamps: true });


module.exports = mongoose.model("Product", productSchema)