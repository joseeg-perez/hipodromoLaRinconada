const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/colorStudVestimentaValidators.js");

const colorStudVestimentaController = require("../../controllers/colorStudVestimentaControllers.js");

router.post("/registrar_colorStudVestimenta", validateCreate, colorStudVestimentaController.registrarColorStudVestimenta);

router.patch("/:colorStudVestimentaId", colorStudVestimentaController.actualizarColorStudVestimenta);

router.delete("/:colorStudVestimentaId", colorStudVestimentaController.borrarColorStudVestimenta);

module.exports = router;
