const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check("username")
        .trim()
        .exists()
        .notEmpty()
        .isEmail(),
    check("password")
        .trim()
        .exists()
        .notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };
