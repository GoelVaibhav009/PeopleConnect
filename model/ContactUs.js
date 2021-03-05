const Mongoose  = require("mongoose");

const ContactSchema = new Mongoose.Schema({
    userId: String,
    name:String,
    mobile:Number,
    email:String,
    message:String,

});

module.exports= Mongoose.model('ContactDetails', ContactSchema)