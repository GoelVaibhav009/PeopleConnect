const SelectedTemplate = require("../model/selectedTemplate");
const ErrorResponse = require("../utils/errorResponse");
//@desc         GET all Template Detail
//@route        GET /api/v1/Template
//@acces        Public

exports.getAllSelectedTemplate = async (req, res, next) => {
  try {
    const SelectedTemplates = await SelectedTemplate.find();
    if (!SelectedTemplates) {
      return next(new ErrorResponse("Template Not Found "));
    }
    res.status(200).json({
      SelectedTemplates,
      success: true,
      msg: "Show all Details",
    });
  } catch (error) {
    next(new ErrorResponse('Template Not found '));
  }
};

//@desc         GET Template Detail By id
//@route        GET /api/v1/Template/:id
//@acces        Public

exports.getSelectedTemplate = async (req, res, next) => {
  try {
    const SelectedTemplates = await SelectedTemplate.findById(req.params.id);
    if (!SelectedTemplates) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      SelectedTemplates,
      success: true,
      msg: "Template Detail of" + req.params.id,
    });
  } catch (error) {
    next(new ErrorResponse('Template Not found '));
  }
};

//@desc         POST Template Detail
//@route        POST /api/v1/Template
//@acces        Private

exports.createSelectedTemplate = async (req, res, next) => {
  await SelectedTemplate.create(req.body),
    res.status(200).json({
      success: true,
      msg: " Created Template Detail ",
    });
};
//@desc         PUT all Template Detail
//@route        PUT /api/v1/Template/:id
//@acces        Private

exports.updateSelectedTemplate = async (req, res, next) => {
  let SelectedTemplates = await SelectedTemplate.findById(req.params.id);
  if (!SelectedTemplates) {
    // error in this
    res.json({
      msg: "Template details with this id not found",
    });
  } else {
    SelectedTemplates = await SelectedTemplate.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      SelectedTemplates,
      success: true,
      msg: " Update Template Detail of" + req.params.id,
    });
  }
};

//@desc         DELETE Template Detail
//@route        DELETE /api/v1/Template/:id
//@acces        Private

exports.deleteSelectedTemplate = async (req, res, next) => {
  let SelectedTemplates = await SelectedTemplate.findById(req.params.id);
  if (!SelectedTemplates) {
    // error in this
    res.json({
      msg: "Template details with this id not found",
    });
  } else {
    SelectedTemplates = await SelectedTemplate.remove({ _id: req.params.id });
    res.status(200).json({
      success: true,
      msg: "Delete Template Detail of" + req.params.id,
    });
  }
};
