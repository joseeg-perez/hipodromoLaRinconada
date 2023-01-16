const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/efectivoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const efectivoController = require("../../controllers/efectivoControllers.js");

router.get("/listado_de_efectivos", efectivoController.obtenerListaDeEfectivos);

router.get("/:efectivoId", validateId, efectivoController.obtenerEfectivoIndividual);

router.post("/registrar_efectivo", efectivoController.registrarEfectivo);

router.patch("/:efectivoId", validateId, efectivoController.actualizarEfectivo);

router.delete("/:efectivoId", validateId, efectivoController.borrarEfectivo);

module.exports = router;