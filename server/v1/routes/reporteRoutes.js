const express = require("express");
const router = express.Router();
const reporte = require("../../reports/reportes.js");


router.get("/usuario_rol", reporte.usuario_roles);