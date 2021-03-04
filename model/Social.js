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
  youtubeVideo: [
    {
      links: String,
      type: {
        type: String,
      },
    },
  ],
});

<<<<<<< HEAD
module.exports= Mongoose.model('SocialDetails', SocialSchema);
=======
module.exports = Mongoose.model('social', SocialSchema)
>>>>>>> 4e23b12ce25d98da52d576998babe4463d5c4a45
