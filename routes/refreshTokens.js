const router = require("express").Router();
const refreshTokenHandler = require("./handler/refresh-tokens");

//? GET, POST ?//
router.post("/", refreshTokenHandler.refreshToken);

module.exports = router;
