const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/veterinarioCaballerizaValidators.js");

const veterinarioCaballerizaController = require("../../controllers/veterinarioCaballerizaControllers.js");

router.post("/registrar_veterinarioCaballeriza", validateCreate, veterinarioCaballerizaController.registrarVeterinarioCaballeriza);

router.patch("/:veterinarioCaballerizaId", veterinarioCaballerizaController.actualizarVeterinarioCaballeriza);

router.delete("/:veterinarioCaballerizaId", veterinarioCaballerizaController.borrarVeterinarioCaballeriza);

module.exports = router;
