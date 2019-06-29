const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "todos", //El nombre del folder en cloudinary
  allowedFormats: ["jpg", "jpeg", "png"],
  filename: function(req, file, cb) {
    cb(null, file.originalname); //Este documento en cloudinary tendria el mismo nombre
  }
});

module.exports = multer({ storage });
