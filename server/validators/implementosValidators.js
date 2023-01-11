const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
  check(["nombreImplemento", "descripcionImplemento"])
    .trim()
    .exists()
    .notEmpty()
    .isAlpha("en-US", { ignore: " " }),
  check("abreviacionImplemento")
    .trim()
    .exists()
    .notEmpty()
    .isAlpha()
    .isLength(3),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
