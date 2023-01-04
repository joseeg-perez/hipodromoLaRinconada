const express = require("express");
const router = express.Router();

const studVestimentaController = require("../../controllers/studVestimentaControllers.js");

router.post("/registrar_studVestimenta", studVestimentaController.registrarStudVestimenta);

router.patch("/:studVestimentaId", studVestimentaController.actualizarStudVestimenta);

router.delete("/:studVestimentaId", studVestimentaController.borrarStudVestimenta);

module.exports = router;
