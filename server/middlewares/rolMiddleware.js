const { buscarUsuario } = require("../database/auth.js");
const { validarToken } = require("../helpers/jwt.js");

const validarRol = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await validarToken(token);
        // const rolUsuario = await buscarUsuario(tokenData.id)
        // console.log("El rol es: "+rolUsuario);
        
        if (!roles.includes(tokenData.rol))
            return(res.status(409).send({ error: "Acceso denegado, este apartado no esta disponible para el rol asignado a la cuenta." }))
        
        next();
    } catch (error) {
        res.status(409).send({ error: "Acceso denegado, este apartado no esta disponible para el rol asignado a la cuenta." });

    }
};

module.exports = { validarRol };