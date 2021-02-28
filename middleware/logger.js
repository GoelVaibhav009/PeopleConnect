//@desc Logs request to console
const logger = (req, res, next) => {
    console.log(
      `${req.method} ${req.protocall}://${req.get("host")}${req.orginalUrl}`
    );
    next();
  };
  
module.exports =logger;  