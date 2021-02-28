const express = require("express");

const router = express.Router();
const {
  getCompanyDetails,
  getCompanyDetail,
  createCompanyDetail,
  updateCompanyDetail,
  deleteCompanyDetail,
} = require("../controller/company_controller");

router.route("/").get(getCompanyDetails).post(createCompanyDetail);
router
  .route("/:id")
  .get(getCompanyDetail)
  .put(updateCompanyDetail)
  .delete(deleteCompanyDetail);

module.exports = router;
