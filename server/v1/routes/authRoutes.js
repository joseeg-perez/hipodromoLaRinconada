const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/registrarseValidators.js");
const { validarInicioSesion } = require("../../validators/iniciarSesionValidators.js");

const authController = require("../../controllers/authControllers.js");

router.post("/iniciar_sesion", validarInicioSesion, authController.iniciarSesion);

router.post("/registrarse", validateCreate, authController.registrarse);

module.exports = router;