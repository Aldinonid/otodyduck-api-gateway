const router = require("express").Router();
const userHandler = require("./handler/users");
const verifyToken = require("../middlewares/verifyToken");

//? GET, POST, PUT, DELETE ?//
router.get("/user", verifyToken, userHandler.getUser);
router.get("/", userHandler.getAllUsers);
router.get("/:id", userHandler.getOneUser);

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);
router.post("/logout", verifyToken, userHandler.logout);

router.put("/:id", userHandler.edit);
router.put("/", verifyToken, userHandler.update);

router.delete("/:id", userHandler.destroy);

module.exports = router;
