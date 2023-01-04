const express = require("express");
const router = express.Router();

const areaController = require("../../controllers/areaControllers");

router.get("/listado_de_areas", areaController.obtenerListaDeAreas);

router.get("/listado_de_igpfa", areaController.obtenerIGPFA);


module.exports = router;
