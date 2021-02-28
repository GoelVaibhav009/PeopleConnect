const express = require("express");

const router = express.Router();
const {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require("../controller/feedback_controller");

router.route("/").get(getFeedbacks).post(createFeedback);
router
  .route("/:id")
  .get(getFeedback)
  .put(updateFeedback)
  .delete(deleteFeedback);

  module.exports = router;
