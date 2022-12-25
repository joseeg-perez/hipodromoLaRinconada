const express = require("express");
const router = express.Router();

const rolController = require("../../controllers/rolControllers.js");

router.get("/listado_de_roles", rolController.obtenerListaDeRoles);

router.get("/:rolId", rolController.obtenerRolIndividual);

router.post("/registrar_rol", rolController.registrarRol);

router.patch("/actualizar_rol", rolController.actualizarRol);

router.delete("/:rolId", rolController.borrarRol);

module.exports = router;
