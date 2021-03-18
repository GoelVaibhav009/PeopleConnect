const SocialDetail = require("../model/Social");

//@desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getSocials = async (req, res, next) => {
  const companydetails = await SocialDetail.find( );

  res.status(200).json({
    companydetails,
    success: true,
    msg: "Show all Details",
  });
};

//@desc         GET all Company Detail
//@route        GET /api/v1/company/:id
//@acces        Public

exports.getSocial = async (req, res, next) => {
  try {
    const companydetails = await SocialDetail.find({ userId: req.params.id });
    if (!companydetails) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      companydetails,
      success: true,
      msg: "Company Detail of" + req.params.id,
    });
  } catch (error) {
    next(new ErrorResponse("Company Not found "));
  }
};

//@desc         POST all Company Detail
//@route        POST /api/v1/company/:id
//@acces        Private

exports.createSocial = async (req, res, next) => {
  try {
    await SocialDetail.create(req.body),
      res.status(200).json({
        success: true,
        msg: " Created Social Detail ",
      });
  } catch (e) {
    console.log(e);
  }
};
//@desc         PUT all Social Detail
//@route        PUT /api/v1/company/:id
//@acces        Private

exports.updateSocial = async (req, res, next) => {
  let socialdetails = await SocialDetail.find({ userId: req.params.id });
  try {
    if (!socialdetails) {
      res.json({
        msg: "company details with this id not found",
      });
    } else {
      socialdetails = await SocialDetail.findOneAndUpdate(
        { userId: req.params.id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(200).json({
        success: true,
        msg: " Update Social Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

//@desc         DELETE Social Detail
//@route        DELETE /api/v1/company/:id
//@acces        Private

exports.deleteSocial = async (req, res, next) => {
  let socialdetails = await SocialDetail.findById(req.params.id);
  try {
    if (!socialdetails) {
      res.json({
        msg: "company details with this id not found",
      });
    } else {
      socialdetails = await SocialDetail.remove({ _id: req.params.id });
      res.status(200).json({
        success: true,
        msg: "Delete Social Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
