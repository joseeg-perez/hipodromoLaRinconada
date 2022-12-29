const express = require("express");
const router = express.Router();

const medicamentoController = require("../../controllers/medicamentoControllers.js");

router.get("/listado_de_medicamentos", medicamentoController.obtenerListaDeMedicamentos);

router.get("/:medicamentoId", medicamentoController.obtenerMedicamentoIndividual);

router.post("/registrar_medicamento", medicamentoController.registrarMedicamento);

router.patch("/:medicamentoId", medicamentoController.actualizarMedicamento);

router.delete("/:medicamentoId", medicamentoController.borrarMedicamento);



module.exports = router;