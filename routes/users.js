const router = require("express").Router();
const userHandler = require("./handler/users");
const verifyToken = require("../middlewares/verifyToken");

//? GET, POST, PUT, DELETE ?//
router.get("/", verifyToken, userHandler.getUser);

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);
router.post("/logout", verifyToken, userHandler.logout);

router.put("/", verifyToken, userHandler.update);

router.delete("/:id", userHandler.destroy);

module.exports = router;
