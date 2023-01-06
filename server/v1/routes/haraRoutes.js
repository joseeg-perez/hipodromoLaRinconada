const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/haraValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const haraController = require("../../controllers/haraControllers.js");

router.get("/listado_de_haras", haraController.obtenerListaDeHaras);

router.get("/:haraId", validateId, haraController.obtenerHaraIndividual);

router.post("/registrar_hara", validateCreate, haraController.registrarHara);

router.patch("/:haraId", validateId, haraController.actualizarHara);

router.delete("/:haraId", validateId, haraController.borrarHara);

module.exports = router;