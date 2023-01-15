const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/reglaTipoApuestaCarreraValidators.js");

const reglaTipoApuestaController = require("../../controllers/reglaTipoApuestaControllers.js");

router.get("/listado_de_reglaTipoApuestas", reglaTipoApuestaController.obtenerListaDeReglaTipoApuesta);

router.get("/:reglaTipoApuestaId", reglaTipoApuestaController.obtenerReglaTipoApuestaIndividual);

router.post("/registrar_reglaTipoApuesta", reglaTipoApuestaController.registrarReglaTipoApuesta);

router.patch("/:reglaTipoApuestaId", reglaTipoApuestaController.actualizarReglaTipoApuesta);

router.delete("/:reglaTipoApuestaId", reglaTipoApuestaController.borrarReglaTipoApuesta);

module.exports = router;