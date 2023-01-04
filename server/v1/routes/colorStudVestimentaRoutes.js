const express = require("express");
const router = express.Router();

const colorStudVestimentaController = require("../../controllers/colorStudVestimentaControllers.js");

router.post("/registrar_colorStudVestimenta", colorStudVestimentaController.registrarColorStudVestimenta);

router.patch("/:colorStudVestimentaId", colorStudVestimentaController.actualizarColorStudVestimenta);

router.delete("/:colorStudVestimentaId", colorStudVestimentaController.borrarColorStudVestimenta);

module.exports = router;
