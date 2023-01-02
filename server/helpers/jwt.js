const jwt = require("jsonwebtoken");

const generarToken = async (usuario) => {
    return(jwt.sign({
        id: usuario.codigo_usuario,
        rol: usuario.fk_rol,
    },
    process.env.JWTSECRET,//
    {
        expiresIn:"2h",//Tiempo de vida del token
    }
    ));

};

const validarToken = async (token) => {
    try {
        return( jwt.verify(token, process.env.JWTSECRET));   
    } catch (error) {
        return(null)
    }
};

const decodificarToken = async (token) => {

};

module.exports = {
    generarToken,
    validarToken,
    decodificarToken,
};