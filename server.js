// CONNECTION
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//S addition setting up connection to Database
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = express.Router();
const mysql = require("mysql");

//USE STATIC FILES
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// TEMPLATING ENGINE
app.set("views", "./src/views");
app.set("view engine", "ejs");

// ROUTES
const indexRouter = require("./src/routes/index");
app.use("/", indexRouter);

// GET VIEWS
app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

// LISTEN ON PORT 3000
app.listen(port, () => console.log(`listening on port ${port}`));


//Sammies copy and Paste start
//Connecting to MySQL database.
const RDS_HOSTNAME = "hopehacks.cuksc0hxhtzn.us-east-1.rds.amazonaws.com";
const RDS_PORT = "3306";
const RDS_DB_NAME = "hopehacks";
const RDS_USERNAME = "root";
const RDS_PASSWORD = "Sam15276mie";

var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

connection.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});
connection.end();