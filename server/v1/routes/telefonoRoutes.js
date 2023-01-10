const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/telefonoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const telefonoController = require("../../controllers/telefonoControllers.js");

router.get("/listado_de_telefonos", telefonoController.obtenerListaDeTelefonos);

router.get("/:telefonoId", validateId, telefonoController.obtenerTelefonoIndividual);

router.post("/registrar_telefono", validateCreate, telefonoController.registrarTelefono);

router.patch("/:telefonoId", validateId, telefonoController.actualizarTelefono);

router.delete("/:telefonoId", validateId, telefonoController.borrarTelefono);

module.exports = router;