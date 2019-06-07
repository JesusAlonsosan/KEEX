const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name:{ 
    type: String, 
    unique: true, 
    lowercase: true }
});

module.exports = mongoose.model("Product", productSchema);