const express = require("express");
const router = express.Router();

const veterinarioCaballerizaController = require("../../controllers/veterinarioCaballerizaControllers.js");

router.post("/registrar_veterinarioCaballeriza", veterinarioCaballerizaController.registrarVeterinarioCaballeriza);

router.patch("/:veterinarioCaballerizaId", veterinarioCaballerizaController.actualizarVeterinarioCaballeriza);

router.delete("/:veterinarioCaballerizaId", veterinarioCaballerizaController.borrarVeterinarioCaballeriza);

module.exports = router;
