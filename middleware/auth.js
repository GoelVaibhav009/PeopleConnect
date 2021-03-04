const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../model/User");

//Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // else if(req.cookies.token){
  //     token = req.cookies.token
  // }

  //Make Sure Token Exists

  if (!token) {
    return next(new ErrorResponse("Not Authrize ", 401));
  }

  try {
    //Verify Token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse("Not Authrize ", 401));
  }
});

//Grant acces to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorResponse(`User role ${req.user.role} is unauthrized to commit this action`, 401));
    }
  };
};
