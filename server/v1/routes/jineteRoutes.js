const express = require("express");
const router = express.Router();

const jineteController = require("../../controllers/jineteControllers.js");

router.get("/listado_de_jinetes", jineteController.obtenerListaDeJinetes);

router.get("/:jineteId", jineteController.obtenerJineteIndividual);

router.post("/registrar_jinete", jineteController.registrarJinete);

router.patch("/actualizar_jinete", jineteController.actualizarJinete);

router.delete("/eliminar_jinete", jineteController.borrarJinete);

module.exports = router;
