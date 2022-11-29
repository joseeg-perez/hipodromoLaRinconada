const express = require("express");
const router = express.Router();

const carreraController = require("../../controllers/carreraControllers");

router.get("/listado_de_carreras", carreraController.obtenerListaDeCarreras);

router.get("/:carreraId", carreraController.obtenerCarreraIndividual);

router.post("/registrar_carrera", carreraController.registrarCarrera);

router.patch("/actualizar_carrera", carreraController.actualizarCarrera);

router.delete("/eliminar_carrera", carreraController.borrarCarrera);

module.exports = router;
