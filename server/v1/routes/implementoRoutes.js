const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/implementosValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const implementoController = require("../../controllers/implementoControllers.js");

router.get("/listado_de_implementos", implementoController.obtenerListaDeImplementos);

router.get("/:implementoId", validateId, implementoController.obtenerImplementoIndividual);

router.post("/registrar_implemento", validateCreate, implementoController.registrarImplemento);

router.patch("/:implementoId", validateId, implementoController.actualizarImplemento);

router.delete("/:implementoId", validateId, implementoController.borrarImplemento);

module.exports = router;