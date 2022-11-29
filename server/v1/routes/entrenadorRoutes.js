const express = require("express");
const router = express.Router();

const entrenadorController = require("../../controllers/entrenadorControllers.js");

router.get("/listado_de_entrenadores", entrenadorController.obtenerListaDeEntrenadores);

router.get("/:entrenadorId", entrenadorController.obtenerEntrenadorIndividual);

router.post("/registrar_entrenador", entrenadorController.registrarEntrenador);

router.patch("/actualizar_entrenador", entrenadorController.actualizarEntrenador);

router.delete("/eliminar_entrenador", entrenadorController.borrarEntrenador);

module.exports = router;
