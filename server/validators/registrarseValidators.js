const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
  check("username").trim().exists().notEmpty().isEmail(),
  check("password").trim().exists().notEmpty(),
  // check("fkRol") //hay que agregar el fkCliente
  //     .exists()
  //     .isNumeric()
  //     .trim()
  //     .notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };

const regExp = new RegExp("^(10|11|12|[1-9]):[0-5][0-9]:[0-5][0-9]$");

// .custom((value) => {
//     return value.match(/^[A-Za-z ""]*$/);
//   }),

// ^(10|11|12|[1-9]):[0-5][0-9]:[0-5][0-9]$
