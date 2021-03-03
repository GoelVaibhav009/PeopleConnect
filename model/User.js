const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ["client", "admin"],
    default: ["client"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createAt: {
    type: Date,
    default: Date.now,
  },
});


//Encrypt password using bcrypt
UserSchema.pre('save',async function(next){

  const salt =await bcrypt.genSalt(10); 
  this.password =await bcrypt.hash(this.password,salt);  

});

//Sign JWT and return

UserSchema.methods.getSignedJwtToken =function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE
  });
}

//MAtch User Entered Password to Hashed Password in database

UserSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
}


module.exports = mongoose.model('User',UserSchema);