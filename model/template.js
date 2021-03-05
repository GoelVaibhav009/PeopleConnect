const Mongoose  = require("mongoose");

const TemplateSchema = new Mongoose.Schema({
        image:String,
        name:String,
        html:String,


});

module.exports= Mongoose.model('template', TemplateSchema)