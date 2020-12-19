const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_USER } = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const userId = req.params.id;
    const users = await api.put(`/users/${userId}`, req.body);
    return res.json(users.data);
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
