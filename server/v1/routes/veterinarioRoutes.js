const express = require("express");
const router = express.Router();

const veterinarioController = require("../../controllers/veterinarioControllers.js");

router.get("/listado_de_veterinarios", veterinarioController.obtenerListaDeVeterinarios);

router.get("/:veterinarioId", veterinarioController.obtenerVeterinarioIndividual);

router.post("/registrar_veterinario", veterinarioController.registrarVeterinario);

router.patch("/:veterinarioId", veterinarioController.actualizarVeterinario);

router.delete("/:veterinarioId", veterinarioController.borrarVeterinario);

module.exports = router;
