// Payment Option
// 1.Paytm ={qr,number}
// 2.Google={qr,number}
// 3.Phone={qr,number}
// 4.Bank Account Detail ={name,account no.,IFSC,bank name}

const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    paytm:{
      qr: String,
      paytmNumber: number,
    },
    googlePay:{
      qr: String,
      gpayNumber: number,
    },
    phonePay:{
      qr: String,
      phonePayNumber: number,
    },
    bankAccountDetails:{
        holderName: String,
        accountNo: number,
        ifsc: String,
        bankName: String
    },
   userId:String,
});

module.exports = mongoose.model("PaymentDetails", PaymentSchema);
