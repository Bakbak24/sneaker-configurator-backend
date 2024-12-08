const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const apiOrdersRouter = require("./routes/api/v1/orders");
const passport = require("./passport/passport");
const config = require("config");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONN || config.get("Database.conn"));

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: "https://sneaker-configurator-three.vercel.app",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/orders", apiOrdersRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
