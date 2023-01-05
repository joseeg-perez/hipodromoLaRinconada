const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/propietarioStudValidators.js");

const propietarioStudController = require("../../controllers/propietarioStudControllers.js");

router.post("/registrar_propietarioStud", validateCreate, propietarioStudController.registrarPropietarioStud);

router.patch("/:propietarioStudId", propietarioStudController.actualizarPropietarioStud);

router.delete("/:propietarioStudId", propietarioStudController.borrarPropietarioStud);

module.exports = router;
