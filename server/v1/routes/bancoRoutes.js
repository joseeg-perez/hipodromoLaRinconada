const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/bancoValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const bancoController = require("../../controllers/bancoControllers.js");

router.get("/listado_de_bancos", bancoController.obtenerListaDeBancos);

router.get("/:bancoId", validateId, bancoController.obtenerBancoIndividual);

router.post("/registrar_banco", bancoController.registrarBanco);

router.patch("/:bancoId", validateId, bancoController.actualizarBanco);

router.delete("/:bancoId", validateId, bancoController.borrarBanco);

module.exports = router;