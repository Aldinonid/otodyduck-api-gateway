require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const toolsRouter = require("./routes/tools");
const usersRouter = require("./routes/users");
const coursesRouter = require("./routes/courses");
const refreshTokensRouter = require("./routes/refreshTokens");

const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/tools", toolsRouter);
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/refresh-tokens", refreshTokensRouter);

module.exports = app;
