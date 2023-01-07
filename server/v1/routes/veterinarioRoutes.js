const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/veterinarioValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const veterinarioController = require("../../controllers/veterinarioControllers.js");

router.get("/listado_de_veterinarios", veterinarioController.obtenerListaDeVeterinarios);

router.get("/listado_de_caballerizas", veterinarioController.obtenerListaDeCaballerizasVacias);

router.get("/:veterinarioId", validateId, veterinarioController.obtenerVeterinarioIndividual);

router.post("/registrar_veterinario", validateCreate, veterinarioController.registrarVeterinario);

router.patch("/:veterinarioId", validateId, veterinarioController.actualizarVeterinario);

router.delete("/:veterinarioId", validateId, veterinarioController.borrarVeterinario);

module.exports = router;
