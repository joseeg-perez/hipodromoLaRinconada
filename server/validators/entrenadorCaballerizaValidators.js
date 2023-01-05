const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check("fechaInicio")
        .exists()
        .notEmpty()
        .isDate(),
    // check("fechaFin")
    //     .custom((value, { req }) => {
    //         if (value === null)
    //             return(true);
            
    //         value
    //         .exists()
    //         .isDate()
    //         .isAfter("fechaInicio")

    //     }),
    check(["fkCaballeriza", "fkEntrenador"])
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };
