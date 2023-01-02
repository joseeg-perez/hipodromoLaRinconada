const express = require("express");
const router = express.Router();

const vestimentaController = require("../../controllers/vestimentaControllers.js");

router.get("/listado_de_vestimentas", vestimentaController.obtenerListaDeVestimentas);

router.get("/:vestimentaId", vestimentaController.obtenerVestimentaIndividual);

router.post("/registrar_vestimenta", vestimentaController.registrarVestimenta);

router.patch("/:vestimentaId", vestimentaController.actualizarVestimenta);

router.delete("/:vestimentaId", vestimentaController.borrarVestimenta);

module.exports = router;
