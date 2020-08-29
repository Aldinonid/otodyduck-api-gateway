const jwt = require("jsonwebtoken");
const apiAdapter = require("../../apiAdapter");
const {
  URL_SERVICE_USER,
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRED,
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const refreshToken = req.body.refresh_token;
    const email = req.body.email;

    if (!refreshToken) {
      return res.status(400).json({
        status: "error",
        message: "Refresh Token must be provide",
      });
    }

    if (!email) {
      return res.status(400).json({
        status: "error",
        message: "Email must be provide",
      });
    }

    await api.get("/refresh-tokens", {
      params: { refresh_token: refreshToken },
    });

    jwt.verify(refreshToken, JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          status: "error",
          message: err.message,
        });
      }

      if (email !== decoded.data.email) {
        return res.status(400).json({
          status: "error",
          message: "Email is not Valid",
        });
      }

      const token = jwt.sign({ data: decoded.data }, JWT_SECRET, {
        expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
      });

      return res.json({
        status: "success",
        data: {
          token,
        },
      });
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
