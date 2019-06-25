const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exchangedSchema = new Schema(
  {
    idbidder: { 
      type: Schema.Types.ObjectId, 
      ref: "User" },

    idproducttender: { 
      type: Schema.Types.ObjectId, 
      ref: "Product"  },

    idapplicant: { 
      type: Schema.Types.ObjectId, 
      ref: "User" },

    idexchanged: { 
      type: Schema.Types.ObjectId, 
      ref: "Product", default:""},

    date: {type: String},

    status: {
      enum:["accepted","rejected","pending"], 
      type:String,default:"pending"}
  },
  
    { timestamps: true }
);

module.exports = mongoose.model("exchangeSchema", exchangedSchema);