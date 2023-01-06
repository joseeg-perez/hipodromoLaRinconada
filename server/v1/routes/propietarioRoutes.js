const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/propietarioValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const propietarioController = require("../../controllers/propietarioControllers.js");

router.get("/listado_de_propietarios", propietarioController.obtenerListaDePropietarios);

router.get("/:propietarioId", validateId, propietarioController.obtenerPropietarioIndividual);

router.post("/registrar_propietario", validateCreate, propietarioController.registrarPropietario);

router.patch("/:propietarioId", validateId, propietarioController.actualizarPropietario);

router.delete("/:propietarioId", validateId, propietarioController.borrarPropietario);

module.exports = router;
