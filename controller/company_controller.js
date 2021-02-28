
const CompanyDetail = require('../model/Company')

//@desc         GET all Company Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getAllCompanyDetail = async (req, res, next) => {
  const companydetails = await CompanyDetail.find()
  res.status(200).json({
    companydetails,
    success: true,
    msg: "Show all Details",
  });
};

//@desc         GET Company Detail By id
//@route        GET /api/v1/company/:id
//@acces        Public

exports.getCompanyDetail = async (req, res, next) => {
    const companydetails = await CompanyDetail.findById(req.params.id)
    res.status(200).json({
        companydetails,
        success: true,
        msg: "Company Detail of" + req.params.id,
      });
};

//@desc         POST Company Detail
//@route        POST /api/v1/company
//@acces        Private

exports.createCompanyDetail = async (req, res, next) => {
    await CompanyDetail.create(req.body),
    res.status(200).json({
        success: true,
        msg: " Created Company Detail ",
      });
};
//@desc         PUT all Company Detail
//@route        PUT /api/v1/company/:id
//@acces        Private

exports.updateCompanyDetail = async (req, res, next) => {
    let companydetails = await CompanyDetail.findById(req.params.id)
    if (!companydetails) {
      // error in this
      res.json({
        msg: "company details with this id not found"
      })
    } else {
      companydetails= await CompanyDetail.findOneAndUpdate(
        {_id: req.params.id }, 
        req.body, 
        {
          new: true,
          runValidators: true,
        })

      res.status(200).json({
        companydetails,
        success: true,
        msg: " Update Company Detail of" + req.params.id,
      });
    }
};

//@desc         DELETE Company Detail
//@route        DELETE /api/v1/company/:id
//@acces        Private

exports.deleteCompanyDetail = async (req, res, next) => {
  let companydetails = await CompanyDetail.findById(req.params.id)
    if (!companydetails) {
      // error in this
      res.json({
        msg: "company details with this id not found"
      })
    } else {
      companydetails= await CompanyDetail.remove({ _id: req.params.id })
      res.status(200).json({
        success: true,
        msg: "Delete Company Detail of" + req.params.id,
      });
    }
};