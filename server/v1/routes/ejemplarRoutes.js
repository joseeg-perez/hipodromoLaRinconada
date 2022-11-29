const express = require("express");
const router = express.Router();

const ejemplarController = require("../../controllers/ejemplarControllers.js");

router.get("/listado_de_ejemplares", ejemplarController.obtenerListaDeEjemplares);

router.get("/:ejemplarId", ejemplarController.obtenerEjemplarIndividual);

router.post("/registrar_ejemplar", ejemplarController.registrarEjemplar);

router.patch("/actualizar_ejemplar", ejemplarController.actualizarEjemplar);

router.delete("/eliminar_ejemplar", ejemplarController.borrarEjemplar);

module.exports = router;