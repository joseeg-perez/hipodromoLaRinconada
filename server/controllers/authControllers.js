const authService = require("../services/authServices.js");
const validator = require("email-validator");
const httpError = require("../helpers/httpMessages.js");
const { generarToken } = require("../helpers/jwt.js")

const registrarse = async (req, res) => {
        
    const { username, password, fkCliente, fkRol } = req.body;

    const emailValido = validator.validate(username);

    if (!username || !password)
        return(httpError.faltaInformacion(res));

    if (!emailValido)
        return(httpError.campoInvalido(res, "email"));

    const nuevoUsuario = {
        username,
        password,
        fkCliente,
        fkRol,
    };
    
    try{
         const usuarioCreado = await authService.registrarse(nuevoUsuario);
         res.status(201).send({ status: "OK" , data: `Se ha registrado el usuario '${username}' de forma satisfactoria.` });
    }catch(error){
        res
        .status(error?.status || 500)
        .send({ status: "FALLO", data: { error: error?.message || error }});    
    }
};

const iniciarSesion = async (req, res) => {
    
    const { username, password } = req.body;

    if (!username || !password)
        return(httpError.faltaInformacion(res));

    const nuevoinicioSesion = {
        username: username.toLowerCase(),
        password,
    };

    try{
        const inicioSesionCreado = await authService.iniciarSesion(nuevoinicioSesion);
        const token = await generarToken(inicioSesionCreado);
        console.log(token);

        return (res.status(200).send({ status: "OK", data: "Inicio de sesion exitoso." }));

    }catch(error){
        return res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};

module.exports = {
    iniciarSesion,
    registrarse,
};