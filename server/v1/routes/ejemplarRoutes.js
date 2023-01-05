const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/ejemplarValidators.js");

const ejemplarController = require("../../controllers/ejemplarControllers.js");

router.get("/listado_de_ejemplares", ejemplarController.obtenerListaDeEjemplares);

router.get("/:ejemplarId", ejemplarController.obtenerEjemplarIndividual);

router.post("/registrar_ejemplar", validateCreate, ejemplarController.registrarEjemplar);

router.patch("/:ejemplarId", ejemplarController.actualizarEjemplar);

router.delete("/:ejemplarId", ejemplarController.borrarEjemplar);

module.exports = router;