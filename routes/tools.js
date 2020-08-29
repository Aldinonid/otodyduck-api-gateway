const router = require("express").Router();
const toolHandler = require("./handler/tools");

//? GET, POST, PUT, DELETE ?//
router.get("/:id", toolHandler.getTool);
router.get("/", toolHandler.getAllTools);

router.post("/", toolHandler.create);

router.put("/:id", toolHandler.update);

router.delete("/:id", toolHandler.destroy);

module.exports = router;
