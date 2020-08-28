const router = require("express").Router();
const toolHandler = require("./handler/tools");

router.post("/", toolHandler.create);
router.put("/:id", toolHandler.update);
router.get("/:id", toolHandler.getTool);
router.get("/", toolHandler.getAllTools);
router.delete("/:id", toolHandler.destroy);

module.exports = router;
