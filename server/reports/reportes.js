const request = require("request");


const generarReporte = (res, data) => {
    const options = {
        uri: "http://localhost:5489/api/report",
        method: "POST",
        json: data
    }
    request(options).pipe(res);

    return;
};

const usuario_roles = (req, res) => {
    const data = {
        template:{"shortid":"30MWS4kbuD"},
        // options: {
        //     preview: true
        // }
    }
    generarReporte(res, data);
};





module.exports = usuario_roles;
