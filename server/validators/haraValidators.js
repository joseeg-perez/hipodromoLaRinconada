const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check("nombreHara")
        .trim()
        .exists()
        .notEmpty()
        .isAlpha('en-US', {ignore: ' '}),
    check("fkLugar")
        .exists()
        .isNumeric()
        .trim()   
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

