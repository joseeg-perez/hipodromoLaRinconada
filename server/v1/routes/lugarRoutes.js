const express = require("express");
const router = express.Router();

const lugarController = require("../../controllers/lugarControllers");

router.get("/listado_de_lugares", lugarController.obtenerListaDelugares);

module.exports = router;
