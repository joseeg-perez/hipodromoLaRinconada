const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeAreas = async () => {
    const query = {
        text: "SELECT * FROM area",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun area");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeAreas,
};