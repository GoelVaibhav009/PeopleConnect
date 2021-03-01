const Mongoose = require("mongoose");

const FeedbackSchema = new Mongoose.Schema({
    userId:String,
    name:String,
    feedback:String,
    star:String,
    date:String,
});

module.exports = Mongoose.model('Feedbacks Products', FeedbackSchema)