const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/tarjetaCreditoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const tarjetaCreditoController = require("../../controllers/tarjetaCreditoControllers.js");

router.get("/listado_de_tarjetaCredito", tarjetaCreditoController.obtenerListaDeTarjetaCredito);

router.get("/:tarjetaCreditoId", validateId, tarjetaCreditoController.obtenerTarjetaCreditoIndividual);

router.post("/registrar_tarjetaCredito", tarjetaCreditoController.registrarTarjetaCredito);

router.patch("/:tarjetaCreditoId", validateId, tarjetaCreditoController.actualizarTarjetaCredito);

router.delete("/:tarjetaCreditoId", validateId, tarjetaCreditoController.borrarTarjetaCredito);

module.exports = router;