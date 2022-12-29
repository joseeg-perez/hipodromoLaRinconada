const express = require("express");
const router = express.Router();

const implementoController = require("../../controllers/implementoControllers.js");

router.get("/listado_de_implementos", implementoController.obtenerListaDeImplementos);

router.get("/:implementoId", implementoController.obtenerImplementoIndividual);

router.post("/registrar_implemento", implementoController.registrarImplemento);

router.patch("/:implementoId", implementoController.actualizarImplemento);

router.delete("/:implementoId", implementoController.borrarImplemento);



module.exports = router;