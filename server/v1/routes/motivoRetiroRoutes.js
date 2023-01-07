const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/motivoRetiroValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const motivoDeRetirosController = require("../../controllers/motivoRetiroControllers.js");

router.get("/listado_de_motivos", motivoDeRetirosController.obtenerListaDeMotivosDeRetiro);

router.get("/:motivoRetiroId", validateId, motivoDeRetirosController.obtenerMotivoDeRetiroIndividual);

router.post("/registrar_motivo", validateCreate, motivoDeRetirosController.registrarMotivoDeRetiro);

router.patch("/:motivoRetiroId", validateId, motivoDeRetirosController.actualizarMotivoDeRetiro);

router.delete("/:motivoRetiroId", validateId, motivoDeRetirosController.borrarMotivoDeRetiro);

module.exports = router;