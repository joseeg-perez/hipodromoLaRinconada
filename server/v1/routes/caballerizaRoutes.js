const express = require("express");
const router = express.Router();

const caballerizaController = require("../../controllers/caballerizaControllers");

router.get("/listado_de_caballerizas", caballerizaController.obtenerListaDeCaballerizas);

router.get("/:caballerizaId", caballerizaController.obtenerCaballerizaIndividual);

router.post("/registrar_caballeriza", caballerizaController.registrarCaballeriza);

router.patch("/:caballerizaId", caballerizaController.actualizarCaballeriza);

router.delete("/:caballerizaId", caballerizaController.borrarCaballeriza);

module.exports = router;
