const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/haraValidators.js");

const haraController = require("../../controllers/haraControllers.js");

router.get("/listado_de_haras", haraController.obtenerListaDeHaras);

router.get("/:haraId", haraController.obtenerHaraIndividual);

router.post("/registrar_hara", validateCreate, haraController.registrarHara);

router.patch("/:haraId", haraController.actualizarHara);

router.delete("/:haraId", haraController.borrarHara);



module.exports = router;