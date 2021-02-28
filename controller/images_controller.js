const Url = require("../model/Images");

//@desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getImages = async(req, res, next) => {
 try {
   const images = await Url.find();
   res.status(200).json({success:true,data:images})
 } catch (error) {
   res.status(400).json({success:false,data:error})
 }
};

//@desc         GET all Company Detail
//@route        GET /api/v1/company/:id
//@acces        Public

exports.getImage = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Company Detail of" + req.params.id,
  });
};

//@desc         POST all Company Detail
//@route        POST /api/v1/company/:id
//@acces        Private

exports.createImage = async (req, res, next) => {
  try {
    const image = await Url.create(req.body);

    res.status(201).json({
      success: true,
      data: image,
    });
  } catch (error) {
    res.status(400).json({ success: false, data: error });
  }
};
//@desc         PUT all Company Detail
//@route        PUT /api/v1/company/:id
//@acces        Private

exports.updateImage = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: " Update Company Detail of" + req.params.id,
  });
};

//@desc         DELETE all Company Detail
//@route        DELETE /api/v1/company/:id
//@acces        Private

exports.deleteImage = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Delete Company Detail of" + req.params.id,
  });
};
