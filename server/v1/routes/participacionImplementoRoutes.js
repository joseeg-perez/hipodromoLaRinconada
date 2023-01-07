const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/participacionImplementoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const participacionImplementoController = require("../../controllers/participacionImplementoControllers.js");

router.get("/listado_de_participacionImplementos", participacionImplementoController.obtenerListaDeParticipacionImplementos);

router.get("/:participacionImplementoId", participacionImplementoController.obtenerParticipacionImplementoIndividual);

router.post("/registrar_participacionImplemento", participacionImplementoController.registrarParticipacionImplemento);

router.patch("/:participacionImplementoId", validateId, participacionImplementoController.actualizarParticipacionImplemento);

router.delete("/:participacionImplementoId", validateId, participacionImplementoController.borrarParticipacionImplemento);

module.exports = router;