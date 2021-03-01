const Mongoose  = require("mongoose");

const TemplateSchema = new Mongoose.Schema({
    template:{
        image:String,
        name:String,
    }

});

module.exports= Mongoose.model('template', TemplateSchema)