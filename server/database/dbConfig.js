//Aqui metemos la conexion con postgreSQL
const { Pool } = require("pg");

//Base de datos de la universidad
// const config = {
//     user: "BPG_grupo3",
//     host: "labs-dbservices01.ucab.edu.ve",
//     password: 123456,
//     database: "Hipodromo_la_rinconada"
// };

const config = {
  user: "BPG_grupo3",
  port: "5432",
  host: "labs-dbservices01.ucab.edu.ve",
  password: "123456",
  database: "Proyecto_Grupo3",
};

const pool = new Pool(config);

// const res = pool.query("SELECT * FROM person");

module.exports = pool;
