const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/compraApuestaCarreraValidators.js");

const compraApuestaController = require("../../controllers/compraApuestaControllers.js");

router.get("/listado_de_compraApuestas", compraApuestaController.obtenerListaDeCompraApuesta);

router.get("/:compraApuestaId", compraApuestaController.obtenerCompraApuestaIndividual);

router.post("/registrar_compraApuesta", compraApuestaController.registrarCompraApuesta);

router.patch("/:compraApuestaId", compraApuestaController.actualizarCompraApuesta);

router.delete("/:compraApuestaId", compraApuestaController.borrarCompraApuesta);

module.exports = router;