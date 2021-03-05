const User = require("../model/User");
const UserDetail = require("../model/User");
const asyncHandler = require('../middleware/async');



exports.getAllUser = async (req, res, next) => {
  try {
    const userDetail = await UserDetail.find();
    res.status(200).json({
      userDetail,
      success: true,
      msg: "Show all Details",
    });
  } catch (error) {
    next(error);
  }
};



exports.register = async (req, res, next) => {
  const user = await UserDetail.create(req.body);

  sendTokenResponse(user,200,res);
 
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //validate email and pass
  if (!email || !password) {
    return res.status(400).json({
      success: fasle,
      error: "Check Email and Pass",
    });
  }
  const user = await UserDetail.findOne({ email }).select('+password');

  if(!user){
    return res.status(401).json({
        success: fasle,
        error: "Invalid Email and Pass",
      });
  }

  const isMatched = await user.matchPassword(password);

  if(!isMatched){
    return res.status(401).json({
        success: fasle,
        error: "Invalid Password",
      });
  }


  sendTokenResponse(user,200,res);
  
};


exports.getMe = asyncHandler(async(req,res,next)=>{
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success:true,
    data:user
  });
})



const sendTokenResponse=(user,statusCode,res)=>{

    const token = user.getSignedJwtToken();

    const options={
        expires:new Date(Date.now()+process.env.JWT_COOKIE*24*60*60*1000),
        httpOnly: true    
    };

    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        token
    })
  }

exports.getUserDetail = async (req, res, next) => {
    try {
      const userDetail = await UserDetail.findById(req.params.id);
      if (!userDetail) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({
        userDetail,
        success: true,
        msg: "Company Detail of" + req.params.id,
      });
    } catch (error) {
      next(error);
    }
  };


exports.updateUserDetail = async (req, res, next) => {
  let userDetail = await UserDetail.findById(req.params.id);
  if (!userDetail) {
    // error in this
    res.json({
      msg: "company details with this id not found",
    });
  } else {
    userDetail = await UserDetail.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      userDetail,
      success: true,
      msg: " Update Company Detail of" + req.params.id,
    });
  }
};

exports.deleteUserDetail = async (req, res, next) => {
  let userDetail = await UserDetail.findById(req.params.id);
  if (!userDetail) {
    // error in this
    res.json({
      msg: "User details with this id not found",
    });
  } else {
    userDetail = await UserDetail.remove({ _id: req.params.id });
    res.status(200).json({
      success: true,
      msg: "Delete User Detail of" + req.params.id,
    });
  }
};
