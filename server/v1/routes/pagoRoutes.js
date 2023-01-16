const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/pagoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const pagoController = require("../../controllers/pagoControllers.js");

router.get("/listado_de_pagos", pagoController.obtenerListaDePagos);

router.get("/:pagoId", validateId, pagoController.obtenerPagoIndividual);

router.post("/registrar_pago", pagoController.registrarPago);

router.patch("/:pagoId", validateId, pagoController.actualizarPago);

router.delete("/:pagoId", validateId, pagoController.borrarPago);

module.exports = router;