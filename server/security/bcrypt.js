const bcrypt = require("bcrypt");
const saltRounds = 10;

const encriptarClave = async(contrasena) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(contrasena, salt);

    return(hash);
};

const compararClave = async(contrasena, hash) => {
    const match = await bcrypt.compare(contrasena, hash);

    return(match);
};

module.exports = {
    encriptarClave,
    compararClave,
};