const router = require("express").Router();

const myCourseHandler = require("./handler/my-courses");

router.get("/", myCourseHandler.get);
router.post("/", myCourseHandler.create);

module.exports = router;
