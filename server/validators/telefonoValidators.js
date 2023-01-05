const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

const validateCreate = [
    check(["fkPropietario", "fkCliente"])
        .custom((value) => {
            return value.match(/^[0-9 ""]*$/);
        }),
    check("extensionTelefono")
        .custom((value) => {
            return value.match(/^[0412|0414|0416|0424|0426|0212 ""]*$/);
        }),
    check("cuerpoTelefono")
        .custom((value) => {
            return value.match(/^[0-9 ""]*$/);
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate };

