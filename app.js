const express = require("express");

const app = express();

// import routes
const pageRoute = require("./routes/pageRoute");

// set view engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static("public"));

// routes
app.use("/", pageRoute);

// listen to server
const PORT = 8888;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
