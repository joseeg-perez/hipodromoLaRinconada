const express = require("express");
const router = express.Router();
const { validateId } = require("../../validators/IDsValidator.js");

const cuerpoDiferenciaController = require("../../controllers/cuerpoDiferenciaControllers.js");

router.get("/listado_de_cuerpoDiferencias", cuerpoDiferenciaController.obtenerListaDeCuerpoDiferencia);

router.get("/:cuerpoDiferenciaId", validateId, cuerpoDiferenciaController.obtenerCuerpoDiferenciaIndividual);

router.post("/registrar_cuerpoDiferencia", cuerpoDiferenciaController.registrarCuerpoDiferencia);

router.delete("/:cuerpoDiferenciaId", validateId, cuerpoDiferenciaController.borrarCuerpoDiferencia);

module.exports = router;