const { Mongoose } = require("mongoose");

const ContactSchema = new Mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    message:String,

});

module.exports= ContactSchema;