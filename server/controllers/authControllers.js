const authService = require("../services/authServices.js");

const registrarse = async (req, res) => {
        
    const { username, password } = req.body;
    if (!username || !password){
        res 
        .status(400)
        .send({
            status: "FAILED",
            data: {
                error:
                "Falta informacion en uno de los campos obligatorios",
            },
        });

        return;
    }

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

    if (!username || !password){
        return res
        .status(400)
        .send({
            status: "FAILED",
            data: {
                error:
                "Uno de los campos obligatorios esta vacio: 'usuario', 'contrasena'",
            },
        });
    }

    const nuevoinicioSesion = {
        username,
        password,
    };

    try{
        const inicioSesionCreado = await authService.iniciarSesion(nuevoinicioSesion);
        return res.status(200).send({ status: "OK", data: "Inicio de sesion exitoso." });

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