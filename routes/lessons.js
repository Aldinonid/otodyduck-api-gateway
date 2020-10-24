const router = require("express").Router();

const lessonHandler = require("./handler/lessons");

router.get("/", lessonHandler.getAll);
router.get("/:id", lessonHandler.get);
router.post("/", lessonHandler.create);
router.put("/:id", lessonHandler.update);
router.delete("/:id", lessonHandler.destroy);

module.exports = router;
