const VeterinarioCaballeriza = require("../database/veterinarioCaballeriza.js");

const registrarVeterinarioCaballeriza = async (nuevoVeterinarioCaballeriza) => {
  try {
    await VeterinarioCaballeriza.registrarVeterinarioCaballeriza(
      nuevoVeterinarioCaballeriza
    );

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarVeterinarioCaballeriza = async (
  veterinarioCaballerizaId,
  cambios
) => {
  try {
    await VeterinarioCaballeriza.actualizarVeterinarioCaballeriza(
      veterinarioCaballerizaId,
      cambios
    );

    return;
  } catch (error) {
    throw error;
  }
};

const borrarVeterinarioCaballeriza = async (veterinarioCaballerizaId) => {
  try {
    await VeterinarioCaballeriza.borrarVeterinarioCaballeriza(
      veterinarioCaballerizaId
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registrarVeterinarioCaballeriza,
  actualizarVeterinarioCaballeriza,
  borrarVeterinarioCaballeriza,
};
