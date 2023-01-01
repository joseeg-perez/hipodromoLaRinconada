const express = require("express");
const router = express.Router();

const pelajeController = require("../../controllers/pelajeControllers.js");

router.get("/listado_de_pelajes", pelajeController.obtenerListaDePelajes);

router.get("/:pelajeId", pelajeController.obtenerPelajeIndividual);

router.post("/registrar_pelaje", pelajeController.registrarPelaje);

router.patch("/:pelajeId", pelajeController.actualizarPelaje);

router.delete("/:pelajeId", pelajeController.borrarPelaje);


module.exports = router;