const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validarInicioSesion = [
    check("username")
        .trim()
        .exists()
        .notEmpty()
        .isEmail(),
    check("password")
        .trim()
        .exists()
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validarInicioSesion };