const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const regExp = new RegExp('^(10|11|12|[0-2][0-9]):[0-5][0-9]:[0-5][0-9]$');

const validateCreate = [
    check("nombreCarrera")
        .trim()
        .exists()
        .notEmpty()
        .isAlpha('en-US', {ignore: ' '}),
    check([
        "numeroCarrera",
        "premioPrimero",
        "premioSegundo",
        "premioTercero",
        "premioCuarto",
        "premioQuinto",
        "fkEvento",
        "fkCategoriaCarrera"])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    check("horaCarrera")
        .trim()    
        .exists()
        .notEmpty()
        .matches(regExp),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };