const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/participacionMedicamentoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const participacionMedicamentoController = require("../../controllers/participacionMedicamentoControllers.js");

router.get("/listado_de_participacionMedicamentos", participacionMedicamentoController.obtenerListaDeParticipacionMedicamentos);

router.get("/:participacionMedicamentoId", participacionMedicamentoController.obtenerParticipacionMedicamentoIndividual);

router.post("/registrar_participacionMedicamento", participacionMedicamentoController.registrarParticipacionMedicamento);

router.patch("/:participacionMedicamentoId", validateId, participacionMedicamentoController.actualizarParticipacionMedicamento);

router.delete("/:participacionMedicamentoId", validateId, participacionMedicamentoController.borrarParticipacionMedicamento);

module.exports = router;