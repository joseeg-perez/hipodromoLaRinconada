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
    check(["fkRango", "cedulaPersona"])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    check("pesoJinete")
        .exists()
        .isNumeric()
        .isInt({ min: 25, max: 60 })
        .trim()   
        .notEmpty(),
        check("alturaJinete")
        .exists()
        .isNumeric()
        .isInt({ min: 130, max: 200 })
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

