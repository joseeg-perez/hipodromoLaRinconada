const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
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
    check("fkCaballeriza")
        .custom((value) => {
            return value.match(/^[0-9 ""]*$/);
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

