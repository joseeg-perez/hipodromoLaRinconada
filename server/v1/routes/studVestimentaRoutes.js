const express = require("express");
const router = express.Router();
const {
  validateCreate,
} = require("../../validators/studVestimentaValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const studVestimentaController = require("../../controllers/studVestimentaControllers.js");

router.post(
  "/registrar_studVestimenta",
  validateCreate,
  studVestimentaController.registrarStudVestimenta
);

router.patch(
  "/:studVestimentaId",
  validateId,
  studVestimentaController.actualizarStudVestimenta
);

router.delete(
  "/:studVestimentaId",
  validateId,
  studVestimentaController.borrarStudVestimenta
);

module.exports = router;
