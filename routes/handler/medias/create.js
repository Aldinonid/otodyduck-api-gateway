const apiAdapter = require("../../apiAdapter");
const multer = require("multer");
const upload = multer().single("images");
const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
const { URL_SERVICE_MEDIA } = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
  try {
    const createMedia = await api.post("/images", req.body, upload());
    return res.json(createMedia.data);
  } catch (err) {
    if (err.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "Service Unavailable" });
    }

    console.log(err);
    // const { status, data } = err.response;
    // return res.status(status).json(data);
  }
};
