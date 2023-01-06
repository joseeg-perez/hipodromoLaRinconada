const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/resultadoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const resultadoController = require("../../controllers/resultadoControllers.js");

router.get("/listado_de_resultados", resultadoController.obtenerListaDeResultados);

router.get("/:resultadoId", validateId, resultadoController.obtenerResultadoIndividual);

router.post("/registrar_resultado", validateCreate, resultadoController.registrarResultado);

router.patch("/:resultadoId", validateId, resultadoController.actualizarResultado);

router.delete("/:resultadoId", validateId, resultadoController.borrarResultado);

module.exports = router;
