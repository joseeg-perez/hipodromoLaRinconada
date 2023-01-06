const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/jineteValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const jineteController = require("../../controllers/jineteControllers.js");

router.get("/listado_de_jinetes", jineteController.obtenerListaDeJinetes);

router.get("/:jineteId", validateId, jineteController.obtenerJineteIndividual);

router.post("/registrar_jinete", validateCreate, jineteController.registrarJinete);

router.patch("/:jineteId", validateId, jineteController.actualizarJinete);

router.delete("/:jineteId", validateId, jineteController.borrarJinete);

module.exports = router;
