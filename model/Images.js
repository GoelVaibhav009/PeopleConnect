const mongoose = require("mongoose");

const ImagesSchema = new mongoose.Schema({
  images: [],
  userId: String,
});

module.exports = mongoose.model("Images", ImagesSchema);
