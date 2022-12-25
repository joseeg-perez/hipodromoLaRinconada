const authService = require("../services/authServices.js");
const validator = require("email-validator");
const httpError = require("../services/httpMessages.js");

const registrarse = async (req, res) => {
        
    const { username, password } = req.body;

    const emailValido = validator.validate(username);

    if (!emailValido)
        return(httpError.campoInvalido(res, "email"));
    

    if (!username || !password)
        return(httpError.faltaInformacion(res));
       
    

    const nuevoUsuario = {
        username,
        password,
    };

    try{
         const usuarioCreado = await authService.registrarse(nuevoUsuario);
         res.status(201).send({ status: "OK" , data: usuarioCreado });
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