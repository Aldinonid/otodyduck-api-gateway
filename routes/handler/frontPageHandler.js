const apiAdapter = require("../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  landingPage: async (req, res) => {
    try {
      const classes = apiAdapter(URL_SERVICE_COURSE).get("/api/courses");
      return console.log(classes);
    } catch (err) {
      if (err.code === "ECONNREFUSED") {
        return res
          .status(500)
          .json({ status: "error", message: "Service Unavailable" });
      }

      const { status, data } = err.response;
      return res.status(status).json(data);
    }
  },
};
