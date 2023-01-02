const express = require("express");
const router = express.Router();

const telefonoController = require("../../controllers/telefonoControllers.js");

router.get("/listado_de_telefonos", telefonoController.obtenerListaDeTelefonos);

router.get("/:telefonoId", telefonoController.obtenerTelefonoIndividual);

router.post("/registrar_telefono", telefonoController.registrarTelefono);

router.patch("/:telefonoId", telefonoController.actualizarTelefono);

router.delete("/:telefonoId", telefonoController.borrarTelefono);


module.exports = router;