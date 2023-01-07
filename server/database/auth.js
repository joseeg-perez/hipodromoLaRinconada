const { encriptarClave, compararClave } = require("../helpers/bcrypt.js");
const jwt = require("jsonwebtoken");
const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const registrarse = async (usuarioAInsertar) => {
  const { username, password, fkCliente, fkRol } = usuarioAInsertar;

  const hash = await encriptarClave(password);

  const text = `INSERT INTO usuario(correo_usuario, contrasena_usuario, fk_cliente, fk_rol) VALUES($1, $2, $3, $4)`;
  const values = [username, hash, fkCliente, fkRol]; //Valores que se pasan en el query para insertar en la base de datos, el hash es la clave encriptada

  try {
    await dbConnection.query(text, values); //Se hace el query a la base de datos
    dbConnection.end;

    return username;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El usuario con el correo'${username}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const iniciarSesion = async (nuevoInicioSesion) => {
  try {
    const usuarioEncontrado = await buscarUsuario(nuevoInicioSesion);

    if (usuarioEncontrado === undefined)
      httpError.noRegistrado(`el usuario '${nuevoInicioSesion.username}'`);

    const match = await compararClave(
      nuevoInicioSesion.password,
      usuarioEncontrado[2]
    ); //Pasa la clave del usuario y su hash para hacer la comparacion

    if (!match) httpError.contrasenaIncorrecta();

    return usuarioEncontrado;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const buscarUsuario = async (usuarioSolicitado) => {
  const { username } = usuarioSolicitado;

  const query = {
    text: "SELECT * FROM usuario WHERE correo_usuario=$1",
    values: [username],
    rowMode: "array", //Se guarda el id, correo y contrasena del usuario, en ese orden dentro de un vector v
  };

  try {
    const res = await dbConnection.query(query);
    const usuario = res.rows[0];
    dbConnection.end;

    return usuario;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  registrarse,
  iniciarSesion,
  buscarUsuario,
};
