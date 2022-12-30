const jwt = require("jsonwebtoken");

const generarToken = async (usuario) => {
    return(jwt.sign({
        id: usuario[0],
        rol: usuario[4],
    },
    process.env.JWTSECRET,//
    {
        expiresIn:"2h"//Tiempo de vida del token
    }
    
    ));
};

const validarToken = async (token) => {

};

const decodificarToken = async (token) => {

};

module.exports = {
    generarToken,
    validarToken,
    decodificarToken,
};