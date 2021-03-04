const express = require("express");

const router = express.Router();
const {
  getAllSelectedTemplate,
  getSelectedTemplate,
  createSelectedTemplate,
  updateSelectedTemplate,
  deleteSelectedTemplate,
} = require("../controller/selectTemplate_controller");

const { protect } = require("../middleware/auth");

router.route("/").get(getAllSelectedTemplate).post(protect, createSelectedTemplate);
router
  .route("/:id")
  .get(getSelectedTemplate)
  .put(protect, updateSelectedTemplate)
  .delete(protect, deleteSelectedTemplate);

module.exports = router;
