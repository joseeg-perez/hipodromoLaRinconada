const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/propietarioStudValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const propietarioStudController = require("../../controllers/propietarioStudControllers.js");

router.get("/obtener_listado_propietarioStud", propietarioStudController.obtenerListaDePropietarios)

router.post("/registrar_propietarioStud", validateCreate, propietarioStudController.registrarPropietarioStud);

router.patch("/:propietarioStudId", validateId, propietarioStudController.actualizarPropietarioStud);

router.delete("/:propietarioStudId", validateId, propietarioStudController.borrarPropietarioStud);

module.exports = router;
