const { param } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateId = [
  param().custom((value) => {
    const valorId = Object.values(value)[0].trim(); //Valor que se pasa en el parametro HTTP
    const nombreParametro = Object.keys(value)[0]; //Nombre del parametro HTTP

    if (isNaN(valorId))
      throw new Error(
        `El parametro ':/${nombreParametro}' unicamente puede contener numeros.`
      );

    return true;
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateId };
