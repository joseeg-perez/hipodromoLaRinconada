const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/rgoJineteValidators.js");


const rgoJineteController = require("../../controllers/rgoJineteControllers.js");

router.get("/listado_de_rgoJinetes", rgoJineteController.obtenerListaDeRgoJinetes);

router.get("/:rgoJineteId", rgoJineteController.obtenerRgoJineteIndividual);

router.post("/registrar_rgoJinete", validateCreate, rgoJineteController.registrarRgoJinete);

router.patch("/:rgoJineteId", rgoJineteController.actualizarRgoJinete);

router.delete("/:rgoJineteId", rgoJineteController.borrarRgoJinete);



module.exports = router;