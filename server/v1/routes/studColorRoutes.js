const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/studColorValidators.js");

const studColorController = require("../../controllers/studColorControllers.js");

router.get("/listado_de_studColor", studColorController.obtenerListaDeStudColor)

router.post("/registrar_studColor", validateCreate, studColorController.registrarStudColor);

router.patch("/:studColorId", studColorController.actualizarStudColor);

router.delete("/:studColorId", studColorController.borrarStudColor);

module.exports = router;
