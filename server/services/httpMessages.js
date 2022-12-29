const faltaInformacion = (res) =>{
    res
    .status(400)
    .send({
        status: "FAILED",
        data: {
            error:"Falta informacion en uno de los campos obligatorios."},
    });
};
//Ocurre cuando se realizan errores de sintaxis
const campoInvalido = (res, nombreCampo) => {
    res
    .status(422)
    .send({
        status: "FAILED",
        data:{
            error:
            `El campo '${nombreCampo}' es invalido.`},
    });
};

const registroExistente = (nombreRegistro) => {
    throw {
        status: 400,
        message: `Este ${nombreRegistro} ya se encuentra registrado`};
};


const idNoEncontrado = (nombreCampo, id) => {
    throw{
        status: 404,
        message: `${nombreCampo} con el id: '${id}' no ha sido registrado.`
    }
};

//Ocurre cuando se accede a una tabla vacia
const nadaQueMostrar = (res) => {
    res
    .status(404)
    .send({
        status: "FAILED",
        data: {
            error:"Este apartado no tiene informacion que mostrar"},
    });
};
//Ocurre cuando se envia un parametro HTTP vacio
const idVacio = (res, parametro) => {
    res
    .status(400)
    .send({
        status: "FAILED",
        data: {
            error:`El parametro '${parametro}' no puede estar vacio.`},
    });
};

const idInvalido = (res, parametro) => {
    res
    .status(400)
    .send({
        status: "FAILED",
        data: {
            error:`El parametro '${parametro}' unicamente puede contener numeros.`},
    });
}
/////////////////////////////////////////////////////////////
const noRegistrado = (nombreCampo) => {
    throw{
        status: 404,
        message: `No se ha registrado ${nombreCampo} por los momentos.`,
    }
}

module.exports = {
    faltaInformacion,
    campoInvalido,
    registroExistente,
    nadaQueMostrar,
    idVacio,
    idNoEncontrado,
    idInvalido,
    noRegistrado,
};