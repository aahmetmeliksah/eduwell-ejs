const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();

// import routes
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

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

// global variables
global.userLoggedIn = null;

// middlewares
app.use(express.static("public"));
// Must use these two middlewares for POST requests
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/eduwell-db" }),
  })
);

// routes
app.use("*", (req, res, next) => {
  userLoggedIn = req.session.userID;
  next();
});
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

// listen to server
const PORT = 8888;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
