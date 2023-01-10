const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/carreraValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const carreraController = require("../../controllers/carreraControllers");

router.get("/listado_de_carreras", carreraController.obtenerListaDeCarreras);

router.get("/:carreraId", validateId, carreraController.obtenerCarreraIndividual);

router.post("/registrar_carrera", validateCreate, carreraController.registrarCarrera);

router.patch("/:carreraId", validateId, carreraController.actualizarCarrera);

router.delete("/:carreraId", validateId, carreraController.borrarCarrera);

module.exports = router;
