// TEMPLATES={image,name,userId,route}

const Mongoose  = require("mongoose");

const TemplateSchema = new Mongoose.Schema({
    img:String,
    name:Number,
    userId:String,
    route:String,
});

module.exports= Mongoose.model('Templates', TemplateSchema)