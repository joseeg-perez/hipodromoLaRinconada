const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/motivoRetiroValidators.js");

const motivoDeRetirosController = require("../../controllers/motivoRetiroControllers.js");

router.get("/listado_de_motivos", motivoDeRetirosController.obtenerListaDeMotivosDeRetiro);

router.get("/:motivoRetiroId", motivoDeRetirosController.obtenerMotivoDeRetiroIndividual);

router.post("/registrar_motivo", validateCreate, motivoDeRetirosController.registrarMotivoDeRetiro);

router.patch("/:motivoRetiroId", motivoDeRetirosController.actualizarMotivoDeRetiro);

router.delete("/:motivoRetiroId", motivoDeRetirosController.borrarMotivoDeRetiro);


module.exports = router;