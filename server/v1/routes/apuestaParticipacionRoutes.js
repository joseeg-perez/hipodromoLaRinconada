const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/apuestaParticipacionCarreraValidators.js");

const apuestaParticipacionController = require("../../controllers/apuestaParticipacionControllers.js");

router.get("/listado_de_apuestaParticipacion", apuestaParticipacionController.obtenerListaDeApuestaParticipacion);

router.get("/:apuestaParticipacionId", apuestaParticipacionController.obtenerApuestaParticipacionIndividual);

router.post("/registrar_apuestaParticipacion", apuestaParticipacionController.registrarApuestaParticipacion);

router.patch("/:apuestaParticipacionId", apuestaParticipacionController.actualizarApuestaParticipacion);

router.delete("/:apuestaParticipacionId", apuestaParticipacionController.borrarApuestaParticipacion);

module.exports = router;