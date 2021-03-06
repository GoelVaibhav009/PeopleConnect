const Mongoose  = require("mongoose");

const CompanySchema = new Mongoose.Schema({
    userId:String,
    firstName:{
        type:String,
        required:[true,'Please add a name'],
        trim:true,
        maxlength:[50,'Name can not be more than 50 characters']
    },
    logo:String,
    lastName:String,
    position:String,
    phone:Number,
    whatsApp:Number,
    address:String,
    email:String,
    website:{
        type:String,
        match:[
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    location:String,
    about:String,
    establish:String,
    companyUrl:{
            type:String,
            required:[true,'Add Company Name'],
            trim:true,
    },
    companyName:{
        type:String,
        required:[true,'Add Company Name'],
    },
    nature:String,
    specialities:String,


});

module.exports= Mongoose.model('CompanyDetails', CompanySchema)