const Mongoose = require("mongoose");

const SocialSchema = new Mongoose.Schema({
  userId:String,
  facebook: String,
  whatsApp: String,
  twitter: String,
  instagram: String,
  linkdin: String,
  youtube: String,
  interest: String,
  youtubeVideo: [],
});

module.exports = Mongoose.model('Social', SocialSchema)
