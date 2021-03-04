const Url = require("../model/Images");
const ErrorResponse = require("../utils/errorResponse");
const path = require('path');

exports.getImages = async (req, res, next) => {
  try {
    const images = await Url.find();
    res.status(200).json({ success: true, data: images });
  } catch (error) {
    res.status(400).json({ success: false, data: error });
  }
};


exports.getImage = async(req, res, next) => {
 try {
  const images = await Url.find({userId:req.params.id});

  if (!images) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({
    success: true,
    data:images
  });
 } catch (error) {
  next(new ErrorResponse('Image Not found '));
 }
};


exports.createImage = async (req, res, next) => {
  try {
    if (!req.files) {
      return next(new ErrorResponse("Please upload a file", 400));
    }
    const file = req.files.file;

    // console.log(JSON.parse(req.files));

    if (!file.mimetype.startsWith("image")) {
      return next(new ErrorResponse("Please upload a file image", 400));
    }

    //chek file Size;
    if (file.size > process.env.MAX_FILE_UPLOAD) {
      return next(
        new ErrorResponse(
          "Please upload a image less than " + process.env.MAX_FILE_UPLOAD,
          400
        )
      );
    }
    file.name = `${Date.now()}-bezkoder-${file.originalname}${path.parse(file.name).ext}`;

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }
        
      const image = await Url.create({
        userId:req.params.id,
        images:`${file.name}`
      });

      res.status(201).json({
        success: true,
        data: image,
      });
    });

  } catch (error) {
    res.status(400).json({ success: false, data: error });
  }
};

exports.deleteImage = async (req, res, next) => {

  let image = await Url.findById(req.params.id);
  if (!image) {
    // error in this
    res.json({
      msg: "Image with this id not found",
    });
  } else {
    image = await Url.remove({ _id: req.params.id });
    res.status(200).json({
      success: true,
      msg: "Delete Image with id" + req.params.id,
    });
  }
};
