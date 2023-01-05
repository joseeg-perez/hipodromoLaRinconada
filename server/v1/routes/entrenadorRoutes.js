const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/entrenadorValidators.js");


const entrenadorController = require("../../controllers/entrenadorControllers.js");

router.get("/listado_de_entrenadores", entrenadorController.obtenerListaDeEntrenadores);

router.get("/listado_de_caballerizas", entrenadorController.obtenerListaDeCaballerizasVacias);

router.get("/:entrenadorId", entrenadorController.obtenerEntrenadorIndividual);

router.post("/registrar_entrenador", validateCreate, entrenadorController.registrarEntrenador);

router.patch("/:entrenadorId", entrenadorController.actualizarEntrenador);

router.delete("/:entrenadorId", entrenadorController.borrarEntrenador);

module.exports = router;
