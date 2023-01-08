const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/tipoResultadoCarreraValidators.js");

const tipoResultadoController = require("../../controllers/tipoResultadoControllers.js");

router.get("/listado_de_tipoResultados", tipoResultadoController.obtenerListaDeTipoResultado);

router.get("/:tipoResultadoId", tipoResultadoController.obtenerTipoResultadoIndividual);

router.post("/registrar_tipoResultado", tipoResultadoController.registrarTipoResultado);

router.patch("/:tipoResultadoId", tipoResultadoController.actualizarTipoResultado);

router.delete("/:tipoResultadoId", tipoResultadoController.borrarTipoResultado);

module.exports = router;