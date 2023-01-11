const authService = require("../services/authServices.js");
const { generarToken } = require("../helpers/jwt.js");

const registrarse = async (req, res) => {
  const { username, password } = req.body;

  const nuevoUsuario = {
    username: username.toLowerCase(),
    password,
  };

  try {
    const usuarioCreado = await authService.registrarse(nuevoUsuario);
    res
      .status(201)
      .send({
        status: "OK",
        data: `Se ha registrado el usuario '${username}' de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FALLO", data: { error: error?.message || error } });
  }
};

const iniciarSesion = async (req, res) => {
  const { username, password } = req.body;

  const nuevoinicioSesion = {
    username: username.toLowerCase(),
    password,
  };

  try {
    const inicioSesionCreado = await authService.iniciarSesion(
      nuevoinicioSesion
    );
    const token = await generarToken(inicioSesionCreado);
    console.log("Este es el token: " + token);

    return res
      .status(200)
      .send({ status: "OK", data: "Inicio de sesion exitoso." });
  } catch (error) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  iniciarSesion,
  registrarse,
};
