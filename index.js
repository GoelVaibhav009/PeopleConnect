const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const exphbs = require('express-handlebars')
const colors = require("colors");
const methodOverride = require('method-override')
const errorHandler = require("./middleware/error");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const cokkie = require("cookie-parser");

const userRoute = require("./routes/auth");
const companyRoute = require("./routes/company");
const socialRoute = require("./routes/social");
const contactRoute = require("./routes/contact");
const feedbackRoute = require("./routes/feedback");
const imagesRoute = require("./routes/images");
const templateRoute = require("./routes/template");
const ecommerceRoute = require("./routes/ecommerce");
const paymentRoute = require("./routes/payment");
const selectedTemplateRoute = require("./routes/selectedTemplate");
const purchasedUserRoute = require("./routes/purchasedUser");


//Lod env vars
dotenv.config({ path: "./config/config.env" });

//Connect To Databse
connectDB();

const app = express();

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Method Overide
// app.use(
//   methodOverride(function (req, res) {
//     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//       // look in urlencoded POST bodies and delete it
//       let method = req.body._method
//       delete req.body._method
//       return method
//     }
//   })
// )

app.use(cokkie());

// Dev Logging Middleware
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//Handlesbars
app.engine('.hbs', exphbs({defaultLayout: 'template', extname: '.hbs'}))

app.set('view engine', '.hbs')


//File  upload
app.use(fileupload());


//Set Static Folder

app.use(express.static(path.join(__dirname, "public")));

// Mount Routes
app.use("/", purchasedUserRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/ecommerce", ecommerceRoute);
app.use("/api/v1/template", templateRoute);
app.use("/api/v1/social", socialRoute);
app.use("/api/v1/images", imagesRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/feedback", feedbackRoute);
app.use("/api/v1/selectedTemplate", selectedTemplateRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
