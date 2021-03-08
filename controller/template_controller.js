const templateDetails = require("../model/template");

//@desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getTemplates = async(req, res, next) => {
  try {
    const templates = await templateDetails.find();
    res.status(200).json({
      success: true,
      data: templates,
    });
  } catch (error) {
    console.log(error);
  }
  };
  
  //@desc         GET all Company Detail
  //@route        GET /api/v1/company/:id
  //@acces        Public
  
  exports.getTemplate = async (req, res, next) => {
      try {
        const template = await templateDetails.findById(req.params.id);
        res.status(200).json({
          success: true,
          data: template,
        });
      } catch (error) {
        console.log(error);
      }
  };
  
//@desc         POST Template Detail
//@route        POST /api/v1/company
//@acces        Private

exports.createTemplate = async (req, res, next) => {
  try {
    await templateDetails.create(req.body),
    res.status(200).json({
    success: true,
    msg: " Created Template Detail ",
  });
  } catch (e) {
   console.log(e)
  }
  
};
//@desc         PUT all Template Detail
//@route        PUT /api/v1/company/:id
//@acces        Private

exports.updateTemplate = async (req, res, next) => {
  let Templatedetails = await templateDetails.findById(req.params.id)
  try {
    if (!Templatedetails) {
      res.json({
        msg: "company details with this id not found"
      })
    } else {
      Templatedetails= await templateDetails.findOneAndUpdate(
        {_id: req.params.id }, 
        req.body, 
        {
          new: true,
          runValidators: true,
        })
  
      res.status(200).json({
        Templatedetails,
        success: true,
        msg: " Update Template Detail of" + req.params.id,
      });
    }
  } catch (e) {
   console.log(e)
  }
  
};

//@desc         DELETE Template Detail
//@route        DELETE /api/v1/company/:id
//@acces        Private

exports.deleteTemplate = async (req, res, next) => {
let Templatedetails = await templateDetails.findById(req.params.id)
  try {
    if (!Templatedetails) {
      res.json({
        msg: "company details with this id not found"
      })
    } else {
      Templatedetails= await templateDetails.remove({ _id: req.params.id })
      res.status(200).json({
        success: true,
        msg: "Delete Template Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e)
  }
  
};
