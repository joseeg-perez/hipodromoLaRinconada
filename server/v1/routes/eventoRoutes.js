const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/eventoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const eventoController = require("../../controllers/eventoControllers.js");

router.get("/listado_de_eventos", eventoController.obtenerListaDeEventos);

router.get("/:eventoId", validateId, eventoController.obtenerEventoIndividual);

router.post("/registrar_evento", eventoController.registrarEvento);

router.patch("/:eventoId", validateId, eventoController.actualizarEvento);

router.delete("/:eventoId", validateId, eventoController.borrarEvento);

module.exports = router;