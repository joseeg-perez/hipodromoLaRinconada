const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/participacionValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const participacionController = require("../../controllers/participacionControllers.js");

router.get("/listado_de_participaciones", participacionController.obtenerListaDeParticipaciones);

router.get("/:participacionId", validateId, participacionController.obtenerParticipacionIndividual);

router.post("/registrar_participacion", validateCreate ,participacionController.registrarParticipacion);

router.patch("/:participacionId", validateId, participacionController.actualizarParticipacion);

router.delete("/:participacionId", validateId, participacionController.borrarParticipacion);

module.exports = router;