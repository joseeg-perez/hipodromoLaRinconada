const express = require("express");
const router = express.Router();

const participacionController = require("../../controllers/participacionControllers.js");

router.get("/listado_de_participaciones", participacionController.obtenerListaDeParticipaciones);

router.get("/:participacionId", participacionController.obtenerParticipacionIndividual);

router.post("/registrar_participacion", participacionController.registrarParticipacion);

router.patch("/:participacionId", participacionController.actualizarParticipacion);

router.delete("/:participacionId", participacionController.borrarParticipacion);


module.exports = router;