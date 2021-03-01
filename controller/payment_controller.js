const PaymentDetail = require("../model/payment");


//desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getPayments =async (req, res, next) => {
  try {
    const companydetails = await PaymentDetail.find();
    res.status(200).json({
      companydetails,
      success: true,
      msg: "Show all Details",
    });
  } catch (error) {
    next(error);
  }
  };
  
  //@desc         GET all Company Detail
  //@route        GET /api/v1/company/:id
  //@acces        Public
  
  exports.getPayment = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "Company Detail of" + req.params.id,
        });
  };
  
  //@desc         POST all Company Detail
  //@route        POST /api/v1/company/:id
  //@acces        Private
  
  exports.createPayment =async (req, res, next) => {
    await PaymentDetail.create(req.body),
    res.status(200).json({
      success: true,
      msg: " Created Payment Detail ",
    });
  };
  //@desc         PUT all Company Detail
  //@route        PUT /api/v1/company/:id
  //@acces        Private
  
  exports.updatePayment = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: " Update Company Detail of" + req.params.id,
        });
  };
  
  //@desc         DELETE all Company Detail
  //@route        DELETE /api/v1/company/:id
  //@acces        Private
  
  exports.deletePayment = (req, res, next) => {
      res.status(200).json({
          success: true,
          msg: "Delete Company Detail of" + req.params.id,
        });
  };
  