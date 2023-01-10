const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check(["nombreMedicamento", "descripcionMedicamento"])
        .trim()
        .exists()
        .notEmpty()
        .isAlpha('en-US', {ignore: ' '}),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

