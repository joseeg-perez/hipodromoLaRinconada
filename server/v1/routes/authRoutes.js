const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authControllers.js");
const { validateCreate } = require("../../validators/registrarseValidators.js");
const { validarInicioSesion } = require("../../validators/iniciarSesionValidators.js");

router.post("/iniciar_sesion", validarInicioSesion, authController.iniciarSesion);
router.post("/registrarse", validateCreate, authController.registrarse);


module.exports = router;