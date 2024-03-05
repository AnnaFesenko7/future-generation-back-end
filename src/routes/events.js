const express = require("express");
const router = express.Router();
const { events: ctrl } = require("../controllers");
// const { joiSchema } = require("../../models/product");
// const { upload } = require("../middlewares");
// const { validationBody, authenticate } = require("../middlewares");

router.get("/", ctrl.getAll);
// router.post(
//   "/",
//   upload.single("image"),

//   ctrl.add
// );
// router.get("/:id", ctrl.getById);
// router.put("/:id", ctrl.updateById);
// router.delete("/:id", ctrl.removeById);
// router.patch(
//   "/:id/rating",
//   validationBody(ratingJoiSchema),
//   ctrlWrapper(ctrl.updateRating)
// );
module.exports = router;
