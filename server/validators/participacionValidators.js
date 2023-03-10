const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check([
        "gualdrapa", 
        "puestoPista",
        "pesoCaballo",
        "pesoJinete",
        "fkEjemplar",
        "fkCarrera",
        "fkJinete"
        ])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
        // check("comentario")
        // .custom((value) => {
        //     return value.match(/^[A-Za-z ""]*$/);
        //   }),
    // check(["fkRetiro", "fkResultado"])
    //     .custom((value) => {
    //         return value.match(/^[0-9 ""]*$/);
    //     }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

