const mongoose = require("mongoose");

const ImagesSchema = new mongoose.Schema({
  images: String,

  userId: String,
});

module.exports = mongoose.model("Images", ImagesSchema);
