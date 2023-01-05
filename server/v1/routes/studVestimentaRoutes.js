const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/studVestimentaValidators.js");

const studVestimentaController = require("../../controllers/studVestimentaControllers.js");

router.post("/registrar_studVestimenta", validateCreate, studVestimentaController.registrarStudVestimenta);

router.patch("/:studVestimentaId", studVestimentaController.actualizarStudVestimenta);

router.delete("/:studVestimentaId", studVestimentaController.borrarStudVestimenta);

module.exports = router;
