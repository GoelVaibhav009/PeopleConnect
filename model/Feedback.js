const Mongoose = require("mongoose");

const FeedbackSchema = new Mongoose.Schema({
    companyId:String,
    name:String,
    feedback:String,
    star:String,
    date:String,
});

module.exports = Mongoose.model('Feedbacks Products', FeedbackSchema)