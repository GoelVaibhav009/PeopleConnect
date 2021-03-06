const Mongoose = require("mongoose");

const EcommerceSchema = new Mongoose.Schema({
  userId: String,
  productName: String,
  image: String,
  mrp: String,
  sellingPrice: String,
  description: String
});

module.exports= Mongoose.model('Ecommerce Products', EcommerceSchema)