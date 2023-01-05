const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/carreraValidators.js");
const carreraController = require("../../controllers/carreraControllers");

router.get("/listado_de_carreras", carreraController.obtenerListaDeCarreras);

router.get("/:carreraId", carreraController.obtenerCarreraIndividual);

router.post("/registrar_carrera", validateCreate, carreraController.registrarCarrera);

router.patch("/:carreraId", carreraController.actualizarCarrera);

router.delete("/:carreraId", carreraController.borrarCarrera);

module.exports = router;
