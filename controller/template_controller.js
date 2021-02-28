//@desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getTemplates = (req, res, next) => {
    res.status(200).json({
      success: true,
      msg: "Show all Details",
    });
  };
  
  //@desc         GET all Company Detail
  //@route        GET /api/v1/company/:id
  //@acces        Public
  
  exports.getTemplate = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "Company Detail of" + req.params.id,
        });
  };
  
  //@desc         POST all Company Detail
  //@route        POST /api/v1/company/:id
  //@acces        Private
  
  exports.createTemplate = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: " Create Company Detail ",
        });
  };
  //@desc         PUT all Company Detail
  //@route        PUT /api/v1/company/:id
  //@acces        Private
  
  exports.updateTemplate = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: " Update Company Detail of" + req.params.id,
        });
  };
  
  //@desc         DELETE all Company Detail
  //@route        DELETE /api/v1/company/:id
  //@acces        Private
  
  exports.deleteTemplate = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "Delete Company Detail of" + req.params.id,
        });
  };
  