const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check("fechaInicioPropiedad")
        .exists()
        .notEmpty()
        .isDate(),
    // check("fechaFinPropiedad")
    //     .custom((value, { req }) => {
    //         if (value === null)
    //             return(true);
            
    //         value
    //         .exists()
    //         .isDate()
    //         .isAfter("fechaInicio")

    //     }),
    check(["fkStud", "fkPropietario"])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    check("porcentajePropiedad")
        .exists()
        .isInt({ min: 0, max: 100 })
        .trim()   
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };
