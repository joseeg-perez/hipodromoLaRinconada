const express = require("express");
const router = express.Router();
const { validateId } = require("../../validators/IDsValidator.js");

const carreraReglaController = require("../../controllers/carreraReglaControllers.js");

router.get("/listado_de_carreraReglas", carreraReglaController.obtenerListaDeCarreraReglas);

router.get("/:carreraReglaId", validateId, carreraReglaController.obtenerCarreraReglaIndividual);

router.post("/registrar_carreraRegla", carreraReglaController.registrarCarreraRegla);

router.delete("/:carreraReglaId", validateId, carreraReglaController.borrarCarreraRegla);

module.exports = router;