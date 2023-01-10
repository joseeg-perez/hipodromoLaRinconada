const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/caballerizaValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const caballerizaController = require("../../controllers/caballerizaControllers");

router.get("/listado_de_caballerizas", caballerizaController.obtenerListaDeCaballerizas);

router.get("/:caballerizaId", validateId, caballerizaController.obtenerCaballerizaIndividual);

router.post("/registrar_caballeriza", validateCreate, caballerizaController.registrarCaballeriza);

router.patch("/:caballerizaId", validateId, caballerizaController.actualizarCaballeriza);

router.delete("/:caballerizaId", validateId, caballerizaController.borrarCaballeriza);

module.exports = router;
