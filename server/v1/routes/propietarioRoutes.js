const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/propietarioValidators.js");

const propietarioController = require("../../controllers/propietarioControllers.js");

router.get("/listado_de_propietarios", propietarioController.obtenerListaDePropietarios);

router.get("/:propietarioId", propietarioController.obtenerPropietarioIndividual);

router.post("/registrar_propietario", validateCreate, propietarioController.registrarPropietario);

router.patch("/:propietarioId", propietarioController.actualizarPropietario);

router.delete("/:propietarioId", propietarioController.borrarPropietario);

module.exports = router;
