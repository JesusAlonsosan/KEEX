const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new schema (
  {
    username: {
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type:String,
    },
  },
  { timestamp: true }
);

