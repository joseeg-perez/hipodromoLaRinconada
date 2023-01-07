const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const genero = new RegExp("^(m|M|f|F)");


const validateCreate = [
    check("nombreEjemplar")
        .trim()
        .exists()
        .notEmpty()
        .isAlpha('en-US', {ignore: ' '}),
    check([
           "numeroEjemplar",
           "tatlabialEjemplar",
           "pesoEjemplar",
           "haraEjemplar",
           "pelajeEjemplar"
        ])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    check("fecha_nacEjemplar")
        .exists()
        .notEmpty()
        .isDate(),
    check("generoEjemplar")
        .trim()
        .exists()
        .notEmpty()
        .matches(genero),
    check(["precioEjemplar", "padreEjemplar", "madreEjemplar"])
        .trim()  
        .isNumeric(),
    check("imagenEjemplar")
        .trim()
        .exists()
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

