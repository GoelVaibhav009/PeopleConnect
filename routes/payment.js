const express = require("express");

const router = express.Router();
const {
  getPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
} = require("../controller/payment_controller");

router.route("/").get(getPayments).post(createPayment);

router
  .route("/:id")
  .get(getPayment)
  .put(updatePayment)
  .delete(deletePayment);

module.exports = router;
