const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authControllers.js");


router.post("/iniciar_sesion", authController.iniciarSesion);
router.post("/registrarse", authController.registrarse);


module.exports = router;