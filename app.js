const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// import routes
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");

// set view engine
app.set("view engine", "ejs");

// connect DB
mongoose
  .connect("mongodb://localhost/eduwell-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected`))
  .catch((err) => console.log(err));

// middlewares
app.use(express.static("public"));
// Must use these two middlewares for POST requests
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

// listen to server
const PORT = 8888;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
