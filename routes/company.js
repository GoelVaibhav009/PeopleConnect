const express = require("express");
const {protect} =require('../middleware/auth');

const router = express.Router();
const {
  getAllCompanyDetail,
  getCompanyDetail,
  createCompanyDetail,
  updateCompanyDetail,
  deleteCompanyDetail,
} = require("../controller/company_controller");

router.route("/").get(getAllCompanyDetail).post(protect,createCompanyDetail);
router.route("/:id")
  .get(getCompanyDetail)
  .put(protect,updateCompanyDetail)
  .delete(protect,deleteCompanyDetail);

module.exports = router;
