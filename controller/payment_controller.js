const PaymentDetail = require("../model/payment");

//desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getPayments = async (req, res, next) => {
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

exports.getPayment = async (req, res, next) => {
  await PaymentDetail.find({ userId: req.params.userId });
  res.status(200).json({
    success: true,
    msg: "Company Detail of" + req.params.id,
  });
};

exports.createPayment = async (req, res, next) => {
  try {
    await PaymentDetail.create(req.body),
      res.status(200).json({
        success: true,
        msg: " Created Payemnt Detail ",
      });
  } catch (e) {
    console.log(e);
  }
};

exports.updatePayment = async (req, res, next) => {
  let paymentdetails = await PaymentDetail.findById(req.params.id);
  try {
    if (!paymentdetails) {
      res.json({
        msg: "company details with this id not found",
      });
    } else {
      paymentdetails = await PaymentDetail.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(200).json({
        paymentdetails,
        success: true,
        msg: " Update Payment Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

//@desc         DELETE Payment Detail
//@route        DELETE /api/v1/company/:id
//@acces        Private

exports.deletePayment = async (req, res, next) => {
  let paymentdetails = await PaymentDetail.findById(req.params.id);
  try {
    if (!paymentdetails) {
      res.json({
        msg: "company details with this id not found",
      });
    } else {
      paymentdetails = await PaymentDetail.remove({ _id: req.params.id });
      res.status(200).json({
        success: true,
        msg: "Delete Payment Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
