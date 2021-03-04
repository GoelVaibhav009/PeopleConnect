const express = require("express");

const router = express.Router();
const {
  getAllSelectedTemplate,
  getSelectedTemplate,
  createSlectedTemplate,
  updateSlectedTemplate,
  deleteSlectedTemplate,
} = require("../controller/selectTemplate_controller");

const { protect } = require("../middleware/auth");

router.route("/").get(getAllSelectedTemplate).post(protect, createSlectedTemplate);
router
  .route("/:id")
  .get(getSelectedTemplate)
  .put(protect, updateSlectedTemplate)
  .delete(protect, deleteSlectedTemplate);

module.exports = router;
