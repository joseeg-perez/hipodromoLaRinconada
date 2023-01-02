const express = require("express");
const router = express.Router();
const { validarPermiso } = require("../../middlewares/authMiddleware.js");
const { validarRol } = require("../../middlewares/rolMiddleware.js");

const ejemplarController = require("../../controllers/ejemplarControllers.js");

router.get("/listado_de_ejemplares", ejemplarController.obtenerListaDeEjemplares);

router.get("/:ejemplarId", ejemplarController.obtenerEjemplarIndividual);

router.post("/registrar_ejemplar", validarPermiso, validarRol([51]),  ejemplarController.registrarEjemplar);

router.patch("/:ejemplarId", ejemplarController.actualizarEjemplar);

router.delete("/:ejemplarId", ejemplarController.borrarEjemplar);

module.exports = router;