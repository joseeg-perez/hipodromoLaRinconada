const express = require("express");
const router = express.Router();

const retiroController = require("../../controllers/retiroControllers.js");

router.get("/listado_de_retiros", retiroController.obtenerListaDeRetiros);

router.get("/:retiroId", retiroController.obtenerRetiroIndividual);

router.post("/registrar_retiro", retiroController.registrarRetiro);

router.patch("/:retiroId", retiroController.actualizarRetiro);

router.delete("/:retiroId", retiroController.borrarRetiro);

module.exports = router;
