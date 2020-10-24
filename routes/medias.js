const router = require("express").Router();
const mediaHandler = require("./handler/medias");

//? GET, POST, PUT, DELETE ?//
router.get("/:id", mediaHandler.getMedia);
router.get("/", mediaHandler.getAllMedia);

router.post("/", mediaHandler.create);

router.put("/:id", mediaHandler.update);

router.delete("/:id", mediaHandler.destroy);

module.exports = router;
