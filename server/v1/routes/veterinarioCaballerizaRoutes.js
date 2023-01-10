const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/veterinarioCaballerizaValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const veterinarioCaballerizaController = require("../../controllers/veterinarioCaballerizaControllers.js");

router.post("/registrar_veterinarioCaballeriza", validateCreate, veterinarioCaballerizaController.registrarVeterinarioCaballeriza);

router.patch("/:veterinarioCaballerizaId", validateId, veterinarioCaballerizaController.actualizarVeterinarioCaballeriza);

router.delete("/:veterinarioCaballerizaId", validateId, veterinarioCaballerizaController.borrarVeterinarioCaballeriza);

module.exports = router;
