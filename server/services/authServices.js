const Auth = require("../database/auth.js");

const registrarse = (nuevoUsuario) => {
  try {
    const usuarioCreado = Auth.registrarse(nuevoUsuario);
    return usuarioCreado;
  } catch (error) {
    throw error;
  }
};

const iniciarSesion = async (nuevoinicioSesion) => {
  try {
    const inicioSesionCreado = await Auth.iniciarSesion(nuevoinicioSesion);
    return inicioSesionCreado;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  iniciarSesion,
  registrarse,
};
