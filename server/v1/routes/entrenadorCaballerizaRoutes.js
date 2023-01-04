const express = require("express");
const router = express.Router();

const entrenadorCaballerizaController = require("../../controllers/entrenadorCaballerizaControllers.js");

router.post("/registrar_entrenadorCaballeriza", entrenadorCaballerizaController.registrarEntrenadorCaballeriza);

router.patch("/:entrenadorCaballerizaId", entrenadorCaballerizaController.actualizarEntrenadorCaballeriza);

router.delete("/:entrenadorCaballerizaId", entrenadorCaballerizaController.borrarEntrenadorCaballeriza);

module.exports = router;
