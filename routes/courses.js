const router = require("express").Router();

const verifyToken = require("../middlewares/verifyToken");
const courseHandler = require("./handler/courses");

//? GET, POST, PUT, DELETE ?//
router.get("/:id", courseHandler.getCourse);
router.get("/", courseHandler.getAllCourses);

router.post("/", verifyToken, courseHandler.create);

router.put("/:id", verifyToken, courseHandler.update);

router.delete("/:id", verifyToken, courseHandler.destroy);

module.exports = router;
