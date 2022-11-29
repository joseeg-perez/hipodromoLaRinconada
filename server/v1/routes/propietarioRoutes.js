const express = require("express");
const router = express.Router();

const propietarioController = require("../../controllers/propietarioControllers.js");

router.get("/listado_de_propietarios", propietarioController.obtenerListaDePropietarios);

router.get("/:propietarioId", propietarioController.obtenerPropietarioIndividual);

router.post("/registrar_propietario", propietarioController.registrarPropietario);

router.patch("/actualizar_propietario", propietarioController.actualizarPropietario);

router.delete("/eliminar_propietario", propietarioController.borrarPropietario);

module.exports = router;
