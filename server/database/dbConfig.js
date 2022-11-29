//Aqui metemos la conexion con postgreSQL
const { Pool }= require("pg");

const config = {
    user: "BPG_grupo3",
    host: "labs-dbservices01.ucab.edu.ve",
    password: 123456,
    database: "Hipodromo_la_rinconada"
};

const pool = new Pool(config);

const res = pool.query("SELECT * FROM Pruebita");
console.log(res);
