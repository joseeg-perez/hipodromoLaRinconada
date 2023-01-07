const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/medicamentoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const medicamentoController = require("../../controllers/medicamentoControllers.js");

router.get("/listado_de_medicamentos", medicamentoController.obtenerListaDeMedicamentos);

router.get("/:medicamentoId", validateId, medicamentoController.obtenerMedicamentoIndividual);

router.post("/registrar_medicamento", validateCreate, medicamentoController.registrarMedicamento);

router.patch("/:medicamentoId", validateId, medicamentoController.actualizarMedicamento);

router.delete("/:medicamentoId", validateId, medicamentoController.borrarMedicamento);

module.exports = router;