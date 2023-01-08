const express = require("express");
const router = express.Router();
const { validateId } = require("../../validators/IDsValidator.js");

const puestoCaballoController = require("../../controllers/puestoCaballoControllers.js");

router.get("/listado_de_puestoCaballos", puestoCaballoController.obtenerListaDePuestoCaballos);

router.get("/:puestoCaballoId", validateId, puestoCaballoController.obtenerPuestoCaballoIndividual);

router.patch("/:puestoCaballoId", validateId, puestoCaballoController.actualizarPuestoCaballo);

router.delete("/:puestoCaballoId", validateId, puestoCaballoController.borrarPuestoCaballo);

module.exports = router;