const express = require("express");
const router = express.Router();
const { validateId } = require("../../validators/IDsValidator.js");

const puestoController = require("../../controllers/puestoControllers.js");

router.get("/listado_de_puestos", puestoController.obtenerListaDePuestos);

router.get("/:puestoId", validateId, puestoController.obtenerPuestoIndividual);

router.patch("/:puestoId", validateId, puestoController.actualizarPuesto);

router.delete("/:puestoId", validateId, puestoController.borrarPuesto);

module.exports = router;