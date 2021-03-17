// Payment Option
// 1.Paytm ={qr,number}
// 2.Google={qr,number}
// 3.Phone={qr,number}
// 4.Bank Account Detail ={name,account no.,IFSC,bank name}

const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    userId:String,
    paytmNumber: String,
    gpayNumber: String,
    phonePay: String,
    qrcode:String,
    holderName: String,
    accountNo: String,
    ifsc: String,
    bankName: String
});

module.exports = mongoose.model("PaymentDetails", PaymentSchema);