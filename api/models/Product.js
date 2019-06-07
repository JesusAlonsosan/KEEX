const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String},
  price:{
    required:true,
    type:String
  },
  category:{},
  style:{
    enum:[]
    image:{
        type:String,
        require:true
      },
      _category:{
        type:,
        ref:'Category',
        description:{
          type:String
        }

      }
    }

 },{ timestamps: true }

module.exports = mongoose.model("Product", productSchema);