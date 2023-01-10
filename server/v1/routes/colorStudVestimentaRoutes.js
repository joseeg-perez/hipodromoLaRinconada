const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/colorStudVestimentaValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const colorStudVestimentaController = require("../../controllers/colorStudVestimentaControllers.js");

router.post("/registrar_colorStudVestimenta", validateCreate, colorStudVestimentaController.registrarColorStudVestimenta);

router.patch("/:colorStudVestimentaId", validateId, colorStudVestimentaController.actualizarColorStudVestimenta);

router.delete("/:colorStudVestimentaId", validateId, colorStudVestimentaController.borrarColorStudVestimenta);

module.exports = router;
