const { validarToken } = require("../helpers/jwt.js");

const validarPermiso = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await validarToken(token);
        
        if (!tokenData.id)
            res.status(409).send({ error: "Acceso denegado, inicio de sesion requerido." });
            
        next();
    } catch (error) {
        res.status(409).send({ error: "Acceso denegado, inicio de sesion requerido." });

    }
};

module.exports = { validarPermiso };