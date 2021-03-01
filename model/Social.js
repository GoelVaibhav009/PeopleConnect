const { Mongoose } = require("mongoose");

const SocialSchema = new Mongoose.Schema({
  userId:String,
  facebook: String,
  whatsApp: String,
  twitter: String,
  instagram: String,
  linkdin: String,
  youtube: String,
  interest: String,
  youtubeVideo: [
    {
      links: String,
      type: {
        type: String,
      },
    },
  ],
});

module.exports = Mongoose.model('social', SocialSchema)