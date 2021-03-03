const ContactDetail = require('../model/ContactUs')

//@desc         GET all Contact Detail
//@route        GET /api/v1/company
//@acces        Public

exports.getAllContacts = async (req, res, next) => {
    const contactdetails = await ContactDetail.find()
    res.status(200).json({
      contactdetails,
      success: true,
      msg: "Show all Details",
    });
  };
  
//@desc         GET all Contact Detail
//@route        GET /api/v1/company/:id
//@acces        Public
  
exports.getContact = async (req, res, next) => {
  const contactdetails = await ContactDetail.findById(req.params.id)  
  res.status(200).json({
        contactdetails,
        success: true,
        msg: "Contact Detail of" + req.params.id,
      });
};
  
//@desc         POST Contact Detail
//@route        POST /api/v1/company
//@acces        Private

exports.createContact = async (req, res, next) => {
  await ContactDetail.create(req.body),
  res.status(200).json({
      success: true,
      msg: " Created Contact Detail ",
    });
};
//@desc         PUT all Contact Detail
//@route        PUT /api/v1/company/:id
//@acces        Private

exports.updateContact = async (req, res, next) => {
  let contactdetails = await ContactDetail.findById(req.params.id)
  try {
    if (!contactdetails) {
      res.json({
        msg: "company details with this id not found"
      })
    } else {
      contactdetails= await ContactDetail.findOneAndUpdate(
        {_id: req.params.id }, 
        req.body, 
        {
          new: true,
          runValidators: true,
        })
  
      res.status(200).json({
        contactdetails,
        success: true,
        msg: " Update Contact Detail of" + req.params.id,
      });
    }
  } catch (e) {
   console.log(e)
  }
  
};

//@desc         DELETE Contact Detail
//@route        DELETE /api/v1/company/:id
//@acces        Private

exports.deleteContact = async (req, res, next) => {
let contactdetails = await ContactDetail.findById(req.params.id)
  try {
    if (!contactdetails) {
      res.json({
        msg: "company details with this id not found"
      })
    } else {
      contactdetails= await ContactDetail.remove({ _id: req.params.id })
      res.status(200).json({
        success: true,
        msg: "Delete Contact Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e)
  }
  
};
