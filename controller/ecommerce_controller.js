//@desc         GET all ecommerce Detail
//@route        GET /api/v1/ecommerce
//@acces        Public

exports.getproducts = (req, res, next) => {
    res.status(200).json({
      success: true,
      msg: "Show all Details",
    });
  };
  
  //@desc         GET all ecommerce Detail
  //@route        GET /api/v1/ecommerce/:id
  //@acces        Public
  
  exports.getproduct = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "ecommerce Detail of" + req.params.id,
        });
  };
  
  //@desc         POST all ecommerce Detail
  //@route        POST /api/v1/ecommerce/:id
  //@acces        Private
  
  exports.createproduct = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: " Create ecommerce Detail ",
        });
  };
  //@desc         PUT all ecommerce Detail
  //@route        PUT /api/v1/ecommerce/:id
  //@acces        Private
  
  exports.updateproduct = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: " Update ecommerce Detail of" + req.params.id,
        });
  };
  
  //@desc         DELETE all ecommerce Detail
  //@route        DELETE /api/v1/ecommerce/:id
  //@acces        Private
  
  exports.deleteproduct = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "Delete ecommerce Detail of" + req.params.id,
        });
  };
  