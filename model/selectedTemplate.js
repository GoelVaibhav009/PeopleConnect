const Mongoose  = require("mongoose");

const SelectedTemplateSchema = new Mongoose.Schema({
    SelectedTemplate:{
        route:String,
        userId:String,
        TemplateId:String,
    }

});

module.exports= Mongoose.model('SelectedTemplate', SelectedTemplateSchema)