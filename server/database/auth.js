const {encriptarClave, compararClave} = require("../security/bcrypt.js");
const jwt = require("jsonwebtoken");
const dbConnection = require("../database/dbConfig.js");
const httpError = require("../services/httpMessages.js")

const registrarse = async (usuarioAInsertar) => {
    const { username, password } = usuarioAInsertar;
    const text = "INSERT INTO usuario(correo_usuario, contrasena_usuario) VALUES($1, $2)";

    const usuarioEncontrado = await buscarUsuario(usuarioAInsertar);
    if (usuarioEncontrado !== undefined)
        httpError.registroExistente("usuario");
       
    




    const hash = await encriptarClave(password);
    const values = [username, hash]; //Valores que se pasan en el query para insertar en la base de datos, el hash es la clave encriptada

    try{
        dbConnection.query(text, values);//Se hace el query a la base de datos
        dbConnection.end;

        const usuarioRegistrado = await buscarUsuario(usuarioAInsertar);
        const secret = process.env.SECRET; //Genera el hash para los tokens de los usuarios
        console.log(secret);
        const token = jwt.sign({ id: usuarioRegistrado[0]}, secret, {
            expiresIn: 86400//Hace que el token expire en un dia
        });
        return(await usuarioAInsertar);
    }catch(error){
        throw(error);
    }
};

const iniciarSesion = async(nuevoInicioSesion) => {
    try {
        const usuarioEncontrado = await buscarUsuario(nuevoInicioSesion);

        if (usuarioEncontrado === undefined){
            throw{
                status: 404,
                message: "El usuario ingresado no se encuentra registrado.",
            }
        }
        
        const match = await compararClave(nuevoInicioSesion.password, usuarioEncontrado[2]); //Pasa la clave del usuario y su hash para hacer la comparacion

         if (!match){
            throw{
                status: 400,
                message: "Contrasena incorrecta",
            }
        }

    } catch (error) {
        throw(error);
    }

    dbConnection.end;
    return(nuevoInicioSesion);
};

const buscarUsuario = async(usuarioSolicitado) => {
    const { username } = usuarioSolicitado;

    const query = {
        text:"SELECT * FROM usuario WHERE correo_usuario=$1",
        values: [username],
        rowMode: "array", //Se guarda el id, correo y contrasena del usuario, en ese orden dentro de un vector v 
    };

    try {
        const res = await dbConnection.query(query);
        const usuario = res.rows[0];
        dbConnection.end;

        return(usuario);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    registrarse,
    iniciarSesion,
    buscarUsuario,
};

