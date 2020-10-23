const router = require("express").Router();
const courseHandler = require("./handler/courses");

//? GET, POST, PUT, DELETE ?//
router.get("/:id", courseHandler.getCourse);
router.get("/", courseHandler.getAllCourses);

router.post("/", courseHandler.create);

router.put("/:id", courseHandler.update);

router.delete("/:id", courseHandler.destroy);

module.exports = router;
