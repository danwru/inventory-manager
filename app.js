// Require modules
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/inventory-manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database connected");
});

// Run the express app
const app = express();

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use express middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Category Route
const categoryRouter = require("./routes/categoryRoutes");
app.use("/", categoryRouter);

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
