const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    // check("observacion")
    // .isAlpha('en-US', {ignore: ' '}),
    // check(["diferenciaTiempo", "tiempoTotal", "tiempo300m", "tiempo400m", "tiempo800m"])
    // .matches((/^(10|11|12|[0-5][0-9]):[0-5][0-9]:[0-5][0-9]$/)),
    // check([
    //     "speedRating",
    //     "speedRating300m",
    //     "speedRating400m",
    //     "speedRating800m",
    //     "gananciaEntrenador",
    //     "gananciaJinete",
    //     "gananciaPropietario",
    //     "fkTipoResultado",
    //     "fkCuerpoDiferencia",
    // ])
    //     .exists()
    //     .isNumeric()
    //     .trim()   
    //     .notEmpty(),
    // (req, res, next) => {
    //     validateResult(req, res, next)
    // }
]

module.exports = { validateCreate };

