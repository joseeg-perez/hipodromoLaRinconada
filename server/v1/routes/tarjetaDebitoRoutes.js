const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/tarjetaDebitoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const tarjetaDebitoController = require("../../controllers/tarjetaDebitoControllers.js");

router.get("/listado_de_tarjetaDebitos", tarjetaDebitoController.obtenerListaDeTarjetaDebito);

router.get("/:tarjetaDebitoId", validateId, tarjetaDebitoController.obtenerTarjetaDebitoIndividual);

router.post("/registrar_tarjetaDebito", tarjetaDebitoController.registrarTarjetaDebito);

router.patch("/:tarjetaDebitoId", validateId, tarjetaDebitoController.actualizarTarjetaDebito);

router.delete("/:tarjetaDebitoId", validateId, tarjetaDebitoController.borrarTarjetaDebito);

module.exports = router;