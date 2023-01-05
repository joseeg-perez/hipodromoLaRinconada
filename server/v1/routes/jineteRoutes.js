const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/jineteValidators.js");

const jineteController = require("../../controllers/jineteControllers.js");

router.get("/listado_de_jinetes", jineteController.obtenerListaDeJinetes);

router.get("/:jineteId", jineteController.obtenerJineteIndividual);

router.post("/registrar_jinete", validateCreate, jineteController.registrarJinete);

router.patch("/:jineteId", jineteController.actualizarJinete);

router.delete("/:jineteId", jineteController.borrarJinete);

module.exports = router;
