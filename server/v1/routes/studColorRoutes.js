const express = require("express");
const router = express.Router();

const studColorController = require("../../controllers/studColorControllers.js");

router.get("/listado_de_studColor", studColorController.obtenerListaDeStudColor)

router.post("/registrar_studColor", studColorController.registrarStudColor);

router.patch("/:studColorId", studColorController.actualizarStudColor);

router.delete("/:studColorId", studColorController.borrarStudColor);

module.exports = router;
