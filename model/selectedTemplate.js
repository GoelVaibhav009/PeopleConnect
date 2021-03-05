const Mongoose  = require("mongoose");

const SelectedTemplateSchema = new Mongoose.Schema({

        userId:String,
        TemplateId:String,


});

module.exports= Mongoose.model('SelectedTemplate', SelectedTemplateSchema)