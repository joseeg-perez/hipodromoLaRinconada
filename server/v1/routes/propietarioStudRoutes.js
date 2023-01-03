const express = require("express");
const router = express.Router();

const propietarioStudController = require("../../controllers/propietarioStudControllers.js");

router.post("/registrar_propietarioStud", propietarioStudController.registrarPropietarioStud);

router.patch("/:propietarioStudId", propietarioStudController.actualizarPropietarioStud);

router.delete("/:propietarioStudId", propietarioStudController.borrarPropietarioStud);

module.exports = router;
