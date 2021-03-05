const EcomProducts = require('../model/Ecommerce')

//@desc         GET all Ecom Detail
//@route        GET /api/v1/ecom
//@acces        Public

exports.getproducts = async (req, res, next) => {
    const ecomproducts = await EcomProducts.find()
    res.status(200).json({
      ecomproducts,
      success: true,
      msg: "Show all Details",
    });
  };
  
//@desc         GET all Ecom Detail
//@route        GET /api/v1/ecom/:id
//@acces        Public
  
exports.getproduct = async (req, res, next) => {
  const ecomproducts = await EcomProducts.findById(req.params.id)  
  res.status(200).json({
        ecomproducts,
        success: true,
        msg: "Ecom Detail of" + req.params.id,
      });
};
  
//@desc         POST Ecom Detail
//@route        POST /api/v1/ecom
//@acces        Private

exports.createproduct = async (req, res, next) => {
  try {
    await EcomProducts.create(req.body),
    res.status(200).json({
        success: true,
        msg: " Created Ecom Detail ",
      });
  } catch (e) {
    console.log(e)
  }
  
};
//@desc         PUT all Ecom Detail
//@route        PUT /api/v1/ecom/:id
//@acces        Private

exports.updateproduct = async (req, res, next) => {
  let ecomproducts = await EcomProducts.findById(req.params.id)
  try {
    if (!ecomproducts) {
      res.json({
        msg: "ecom details with this id not found"
      })
    } else {
      ecomproducts= await EcomProducts.findOneAndUpdate(
        {_id: req.params.id }, 
        req.body, 
        {
          new: true,
          runValidators: true,
        })
  
      res.status(200).json({
        ecomproducts,
        success: true,
        msg: " Update Ecom Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e)
  }
  
};

//@desc         DELETE Ecom Detail
//@route        DELETE /api/v1/ecom/:id
//@acces        Private

exports.deleteproduct = async (req, res, next) => {
let ecomproducts = await EcomProducts.findById(req.params.id)
  try {
    if (!ecomproducts) {
      res.json({
        msg: "ecom details with this id not found"
      })
    } else {
      ecomproducts= await EcomProducts.remove({ _id: req.params.id })
      res.status(200).json({
        success: true,
        msg: "Delete Ecom Detail of" + req.params.id,
      });
    }
  } catch (e) {
    console.log(e)
  }
  
};
