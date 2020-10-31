const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  const status = req.query.status;
  try {
    if (status) {
      const getCourse = await api.get(`/api/courses?status=${status}`);
      return res.json(getCourse.data);
    } else {
      const getCourse = await api.get("/api/courses");
      return res.json(getCourse.data);
    }
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
