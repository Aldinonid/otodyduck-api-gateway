const router = require("express").Router();
const { URL_SERVICE_COURSE, URL_SERVICE_USER } = process.env;

const apiAdapter = require("./apiAdapter");

const landingPage = async (req, res) => {
  try {
    const classes = await apiAdapter(URL_SERVICE_COURSE).get(
      "/api/courses?status=published"
    );
    const users = await apiAdapter(URL_SERVICE_USER).get("/users");

    const teachers = users.data.data.filter((user) => user.role === "teacher");
    const students = users.data.data.filter((user) => user.role === "student");

    return res.json({
      hero: {
        students: students.length,
        teachers: teachers.length,
        classes: classes.data.data.length,
      },
      class: classes.data.data,
    });
  } catch (err) {
    if (err.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "Service Unavailable" });
    }

    const { status, data } = err.response;
    return res.status(status).json(data);
  }
};

router.get("/", landingPage);

module.exports = router;
