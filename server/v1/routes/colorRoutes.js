const express = require("express");
const router = express.Router();
const { validateId } = require("../../validators/IDsValidator.js");

const colorController = require("../../controllers/colorControllers.js");

router.get("/listado_de_colores", colorController.obtenerListaDeColores);

// router.get("/:colorId", colorController.obtenerColorIndividual);

// router.post("/registrar_color", colorController.registrarColor);

// router.patch("/:colorId", colorController.actualizarColor);

// router.delete("/:colorId", colorController.borrarColor);

module.exports = router;