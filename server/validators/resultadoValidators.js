const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check("observacion")
        .custom((value) => {
            return value.match(/^[A-Za-z ""]*$/);
          }),
    check(["diferenciaTiempo", "tiempoTotal"])
    .matches((/^(10|11|12|[0-5][0-9]):[0-5][0-9]:[0-5][0-9]$/)),
    check([
        "speedRating",
        "speedRating300m",
        "speedRating400m",
        "speedRating800m",
        "gananciaEntrenador",
        "gananciaJinete",
        "gananciaPropietario",
        "fkTipoResultado",
        "fkCuerpoDiferencia",
    ])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

