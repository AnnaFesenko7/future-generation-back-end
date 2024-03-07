const express = require("express");
const router = express.Router();
const { events: ctrl } = require("../../controllers");
const { eventSchemas } = require("../../joiSchemas");
// const { upload } = require("../middlewares");
const { validation, isValidId } = require("../../middlewares");

router.get("/", ctrl.getAll);
router.post(
  "/",
  //   upload.single("image"),
  validation(eventSchemas.add),
  ctrl.add
);
router.get("/:id", isValidId, ctrl.getById);
router.put("/:id", isValidId, ctrl.updateById);
// router.patch("/:id", isValidId, ctrl.updateImages);
router.delete("/:id", isValidId, ctrl.deleteEvent);

module.exports = router;
