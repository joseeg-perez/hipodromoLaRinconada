const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/retiroValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const retiroController = require("../../controllers/retiroControllers.js");

router.get("/listado_de_retiros", retiroController.obtenerListaDeRetiros);

router.get("/:retiroId", validateId, retiroController.obtenerRetiroIndividual);

router.post("/registrar_retiro", validateCreate, retiroController.registrarRetiro);

router.patch("/:retiroId", validateId, retiroController.actualizarRetiro);

router.delete("/:retiroId", validateId, retiroController.borrarRetiro);

module.exports = router;
