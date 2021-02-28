//@desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getFeedbacks = (req, res, next) => {
    res.status(200).json({
      success: true,
      msg: "Show all Details",
    });
  };
  
  //@desc         GET all Company Detail
  //@route        GET /api/v1/company/:id
  //@acces        Public
  
  exports.getFeedback = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "Company Detail of" + req.params.id,
        });
  };
  
  //@desc         POST all Company Detail
  //@route        POST /api/v1/company/:id
  //@acces        Private
  
  exports.createFeedback = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: " Create Company Detail ",
        });
  };
  //@desc         PUT all Company Detail
  //@route        PUT /api/v1/company/:id
  //@acces        Private
  
  exports.updateFeedback = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: " Update Company Detail of" + req.params.id,
        });
  };
  
  //@desc         DELETE all Company Detail
  //@route        DELETE /api/v1/company/:id
  //@acces        Private
  
  exports.deleteFeedback = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "Delete Company Detail of" + req.params.id,
        });
  };
  