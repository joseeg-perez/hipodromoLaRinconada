const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/rgoJineteValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const rgoJineteController = require("../../controllers/rgoJineteControllers.js");

router.get("/listado_de_rgoJinetes", rgoJineteController.obtenerListaDeRgoJinetes);

router.get("/:rgoJineteId", validateId, rgoJineteController.obtenerRgoJineteIndividual);

router.post("/registrar_rgoJinete", validateCreate, rgoJineteController.registrarRgoJinete);

router.patch("/:rgoJineteId", validateId, rgoJineteController.actualizarRgoJinete);

router.delete("/:rgoJineteId", validateId, rgoJineteController.borrarRgoJinete);

module.exports = router;