const mongoose = require("mongoose");

const ImagesSchema = new mongoose.Schema({
  images: [
    {
      url: String,
    },
  ],
   userId:String,
});

module.exports = mongoose.model("image", ImagesSchema);
