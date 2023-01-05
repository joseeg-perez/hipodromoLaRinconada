const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/entrenadorCaballerizaValidators.js");

const entrenadorCaballerizaController = require("../../controllers/entrenadorCaballerizaControllers.js");

router.post("/registrar_entrenadorCaballeriza", validateCreate, entrenadorCaballerizaController.registrarEntrenadorCaballeriza);

router.patch("/:entrenadorCaballerizaId", entrenadorCaballerizaController.actualizarEntrenadorCaballeriza);

router.delete("/:entrenadorCaballerizaId", entrenadorCaballerizaController.borrarEntrenadorCaballeriza);

module.exports = router;
