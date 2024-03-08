const express = require("express");
const router = express.Router();
const { events: ctrl } = require("../../controllers");
const { eventSchemas } = require("../../joiSchemas");
// const { upload } = require("../middlewares");
const { validation, isValidId, authenticate } = require("../../middlewares");

router.get("/", ctrl.getAll);
router.post(
  "/",
  authenticate,
  //   upload.single("image"),
  validation(eventSchemas.add),
  ctrl.add
);
router.get("/:id", isValidId, ctrl.getById);
router.put("/:id", authenticate, isValidId, ctrl.updateById);
// router.patch("/:id", isValidId, ctrl.updateImages);
router.delete("/:id", authenticate, isValidId, ctrl.deleteEvent);

module.exports = router;
