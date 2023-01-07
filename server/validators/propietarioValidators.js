const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check("correo")
        .trim()
        .exists()
        .notEmpty()
        .isEmail(),
    check(["nombre1Persona", "apellido1Persona"])
        .trim()
        .exists()
        .notEmpty()
        .isAlpha(),
    check(["nombre2Persona", "apellido2Persona"])
        .custom((value) => {
            return value.match(/^[A-Za-z ""]*$/);
          }),
    check("cedulaPersona")
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    check("fechaNacimiento")
        .exists()
        .notEmpty()
        .isDate(),
    check("fkLugar")
        .custom((value) => {
            return value.match(/^[0-9 ""]*$/);
        }),
    check("extension_tlf")
        .custom((value) => {
            return value.match(/^[0412|0414|0416|0424|0426|0212 ""]*$/);
        }),
    check("cuerpo_tlf")
        .custom((value) => {
            return value.match(/^[0-9 ""]*$/);
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

