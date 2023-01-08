const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/reglaValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const reglaController = require("../../controllers/reglaControllers.js");

router.get("/listado_de_reglas", reglaController.obtenerListaDeReglas);

router.get("/:reglaId", validateId, reglaController.obtenerReglaIndividual);

router.post("/registrar_regla", reglaController.registrarRegla);

router.patch("/:reglaId", validateId, reglaController.actualizarRegla);

router.delete("/:reglaId", validateId, reglaController.borrarRegla);

module.exports = router;