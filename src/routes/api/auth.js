const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");

const { authenticate, validation } = require("../../middlewares");
const { authSchemas } = require("../../joiSchemas");

router.post("/register", validation(authSchemas.registerSchema), ctrl.register);

router.post("/login", validation(authSchemas.loginSchema), ctrl.login);

router.get("/logout", authenticate, ctrl.logout);

router.get("/google", ctrl.googleAuth);

router.get("/google-redirect", ctrl.googleRedirect);

module.exports = router;
