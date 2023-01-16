const express = require("express");
const router = express.Router();
const { validateId } = require("../../validators/IDsValidator.js");

const gacetaController = require("../../controllers/gacetaControllers.js");


router.get("/query1/:gacetaId", gacetaController.obtenerListaQuery1);

router.get("/query2/:gacetaId", gacetaController.obtenerListaQuery2);

router.get("/query3/:gacetaId", gacetaController.obtenerListaQuery3);

router.get("/query4/:gacetaId", gacetaController.obtenerListaQuery4);

router.get("/query5/:gacetaId", gacetaController.obtenerListaQuery5);

router.get("/query6/:gacetaId", gacetaController.obtenerListaQuery6);

router.get("/query7/:gacetaId", gacetaController.obtenerListaQuery7);

router.get("/query8/:gacetaId", gacetaController.obtenerListaQuery8);



module.exports = router;