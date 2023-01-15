const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/tipoApuestaCarreraValidators.js");

const tipoApuestaController = require("../../controllers/tipoApuestaControllers.js");

router.get("/listado_de_tipoApuestas", tipoApuestaController.obtenerListaDeTipoApuesta);

router.get("/:tipoApuestaId", tipoApuestaController.obtenerTipoApuestaIndividual);

router.post("/registrar_tipoApuesta", tipoApuestaController.registrarTipoApuesta);

router.patch("/:tipoApuestaId", tipoApuestaController.actualizarTipoApuesta);

router.delete("/:tipoApuestaId", tipoApuestaController.borrarTipoApuesta);

module.exports = router;