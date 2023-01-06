const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/entrenadorCaballerizaValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const entrenadorCaballerizaController = require("../../controllers/entrenadorCaballerizaControllers.js");

router.post("/registrar_entrenadorCaballeriza", validateCreate, entrenadorCaballerizaController.registrarEntrenadorCaballeriza);

router.patch("/:entrenadorCaballerizaId", validateId, entrenadorCaballerizaController.actualizarEntrenadorCaballeriza);

router.delete("/:entrenadorCaballerizaId", validateId, entrenadorCaballerizaController.borrarEntrenadorCaballeriza);

module.exports = router;
