require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const mediaRouter = require("./routes/media");
const usersRouter = require("./routes/users");
const coursesRouter = require("./routes/courses");
const flowsRouter = require("./routes/flows");
const mentorsRouter = require("./routes/mentors");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");
const toolsRouter = require("./routes/tools");
const myCoursesRouter = require("./routes/myCourses");
const webhookRouter = require("./routes/webhook");
const orderPaymentsRouter = require("./routes/orderPayment");
const refreshTokensRouter = require("./routes/refreshTokens");
const landingPageRouter = require("./routes/landingPage");

const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/media", mediaRouter);
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/flow", flowsRouter);
app.use("/mentors", verifyToken, mentorsRouter);
app.use("/chapters", verifyToken, chaptersRouter);
app.use("/lessons", verifyToken, lessonsRouter);
app.use("/tools", verifyToken, toolsRouter);
app.use("/my-courses", verifyToken, myCoursesRouter);
app.use("/webhook", webhookRouter);
app.use("/orders", verifyToken, orderPaymentsRouter);
app.use("/refresh-tokens", refreshTokensRouter);
app.use("/landing-page", landingPageRouter);

module.exports = app;
