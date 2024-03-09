const express = require("express");
const router = express.Router();
const { users: ctrl } = require("../../controllers");
const { authenticate, validation } = require("../../middlewares");

// const { users } = require('../../joiSchemas');

router.get("/current", authenticate, ctrl.getCurrent);

// router.put(
//   '/language',
//   validation(users.changeLangSchema),
//   authenticate,
//   ctrl.changeLang
// );

module.exports = router;
