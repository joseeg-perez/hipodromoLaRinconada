const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/pelajeValidators.js");

const pelajeController = require("../../controllers/pelajeControllers.js");

router.get("/listado_de_pelajes", pelajeController.obtenerListaDePelajes);

router.get("/:pelajeId", pelajeController.obtenerPelajeIndividual);

router.post("/registrar_pelaje", validateCreate, pelajeController.registrarPelaje);

router.patch("/:pelajeId", pelajeController.actualizarPelaje);

router.delete("/:pelajeId", pelajeController.borrarPelaje);


module.exports = router;