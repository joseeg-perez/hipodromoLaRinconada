const express = require("express");
const router = express.Router();

const ejemplarController = require("../../controllers/ejemplarControllers.js");

router.get("/listado_de_ejemplares", ejemplarController.obtenerListaDeEjemplares);

router.get("/:ejemplarId", ejemplarController.obtenerEjemplarIndividual);

router.post("/registrar_ejemplar", ejemplarController.registrarEjemplar);

router.patch("/:ejemplarId", ejemplarController.actualizarEjemplar);

router.delete("/:ejemplarId", ejemplarController.borrarEjemplar);

module.exports = router;