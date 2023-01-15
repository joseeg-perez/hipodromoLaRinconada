const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/reglaApuestaCarreraValidators.js");

const reglaApuestaController = require("../../controllers/reglaApuestaControllers.js");

router.get("/listado_de_reglaApuestas", reglaApuestaController.obtenerListaDeReglaApuesta);

router.get("/:reglaApuestaId", reglaApuestaController.obtenerReglaApuestaIndividual);

router.post("/registrar_reglaApuesta", reglaApuestaController.registrarReglaApuesta);

router.patch("/:reglaApuestaId", reglaApuestaController.actualizarReglaApuesta);

router.delete("/:reglaApuestaId", reglaApuestaController.borrarReglaApuesta);

module.exports = router;