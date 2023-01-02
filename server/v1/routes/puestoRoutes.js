const express = require("express");
const router = express.Router();

const puestoController = require("../../controllers/puestoControllers.js");

router.get("/listado_de_puestos", puestoController.obtenerListaDePuestos);

router.get("/:puestoId", puestoController.obtenerPuestoIndividual);

router.patch("/:puestoId", puestoController.actualizarPuesto);

router.delete("/:puestoId", puestoController.borrarPuesto);

module.exports = router;