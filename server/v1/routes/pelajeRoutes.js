const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/pelajeValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const pelajeController = require("../../controllers/pelajeControllers.js");

router.get("/listado_de_pelajes", pelajeController.obtenerListaDePelajes);

router.get("/:pelajeId", validateId, pelajeController.obtenerPelajeIndividual);

router.post("/registrar_pelaje", validateCreate, pelajeController.registrarPelaje);

router.patch("/:pelajeId", validateId, pelajeController.actualizarPelaje);

router.delete("/:pelajeId", validateId, pelajeController.borrarPelaje);

module.exports = router;