const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
    },
    lastname:{
      required:true,
      type: String
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    raiting:{
      type: Number,
      default: 0
    },
    image:{
      default:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806718/profileapp/asdsadsa_tuo0fx.jpg",
      type: String,
      
    },
    description: {
      type: String,
      default:""
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);