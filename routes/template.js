const express = require("express");

const router = express.Router();
const {
  getTemplates,
  getTemplate,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} = require("../controller/template_controller");

const {protect} =require('../middleware/auth');


router.route("/").get(getTemplates).post(protect,createTemplate);
router
  .route("/:id")
  .get(getTemplate)
  .put(protect,updateTemplate)
  .delete(protect,deleteTemplate);

module.exports = router;
