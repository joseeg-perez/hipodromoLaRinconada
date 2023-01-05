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
    check(["fkCaballeriza", "cedulaPersona"])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    check("fechaNacimiento")
        .exists()
        .notEmpty()
        .isDate(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

