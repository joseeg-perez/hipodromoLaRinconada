const express = require("express");
const router = express.Router();

const lugarController = require("../../controllers/lugarControllers");

router.get("/listado_de_lugares", lugarController.obtenerListaDelugares);

router.get("/listado_de_emp", lugarController.obtenerEMP);

module.exports = router;
