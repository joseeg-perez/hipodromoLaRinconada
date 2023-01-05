const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check("fechaRetiro")
        .exists()
        .notEmpty()
        .isDate(),
    check("fkMotivo")
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };