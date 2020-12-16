const router = require("express").Router();

const verifyToken = require("../middlewares/verifyToken");
const flowHandler = require("./handler/flows");

//? GET, POST, PUT, DELETE ?//
router.get("/:slug", flowHandler.getFlow);
router.get("/", flowHandler.getAllFlow);

router.post("/", verifyToken, flowHandler.create);

router.put("/:id", verifyToken, flowHandler.update);

router.delete("/:id", verifyToken, flowHandler.destroy);

module.exports = router;
