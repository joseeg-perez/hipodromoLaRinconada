const express = require("express");
const router = express.Router();

const studController = require("../../controllers/studControllers.js");

router.get("/listado_de_studs", studController.obtenerListaDeStuds);

router.get("/:studId", studController.obtenerStudIndividual);

router.post("/registrar_stud", studController.registrarStud);

router.patch("/:studId", studController.actualizarStud);

router.delete("/:studId", studController.borrarStud);

module.exports = router;
