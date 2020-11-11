const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_MEDIA } = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
  try {
    const imageId = req.params.id;
    const deleteImage = await api.delete(`/images/${imageId}`);
    return res.json(deleteImage.data);
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
