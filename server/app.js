const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

//const apicache = require("apicache");

dotenv.config(); //Para usar las variables de entorno

const app = express();

const v1JineteRouter = require("./v1/routes/jineteRoutes.js");
const v1CarreraRouter = require("./v1/routes/carreraRoutes.js");
const v1EjemplarRouter = require("./v1/routes/ejemplarRoutes.js");
const v1EntrenadorRouter = require("./v1/routes/entrenadorRoutes.js");
const v1PropietarioRouter = require("./v1/routes/propietarioRoutes.js");
const v1RolRouter = require("./v1/routes/rolRoutes.js");
const v1StudRouter = require("./v1/routes/studRoutes.js");
const v1ReporteRouter = require("./reports/reportes.js");
const v1AuthRouter = require("./v1/routes/authRoutes.js");
const v1HaraRouter = require("./v1/routes/haraRoutes.js");
const v1ImplementoRouter = require("./v1/routes/implementoRoutes.js");
const v1MedicamentoRouter = require("./v1/routes/medicamentoRoutes.js");
const v1RgoJineteRouter = require("./v1/routes/rgoJineteRoutes.js");
const v1CategoriaCarrerasRouter = require("./v1/routes/categoriaCarreraRoutes.js");
const v1PelajeRouter = require("./v1/routes/pelajeRoutes.js");
const v1RestauranteRouter = require("./v1/routes/restauranteRoutes.js");
const v1RetiroRoutes = require("./v1/routes/retiroRoutes.js");
const v1VestimentaRoutes = require("./v1/routes/vestimentaRoutes.js");
const v1VeterinarioRoutes = require("./v1/routes/veterinarioRoutes.js");
const v1CaballerizaRoutes = require("./v1/routes/caballerizaRoutes.js");
const v1TelefonoRoutes = require("./v1/routes/telefonoRoutes.js");
const v1PuestoRoutes = require("./v1/routes/puestoRoutes.js");
const v1AreaRoutes = require("./v1/routes/areaRoutes.js");
const v1LugarRoutes = require("./v1/routes/lugarRoutes.js");
const v1MotivoRetiroRoutes = require("./v1/routes/motivoRetiroRoutes.js");
const v1ParticipacionRoutes = require("./v1/routes/participacionRoutes.js");
const v1PropietarioStudRoutes = require("./v1/routes/propietarioStudRoutes");
const v1StudColorRoutes = require("./v1/routes/studColorRoutes.js");
const v1StudVestimentaRoutes = require("./v1/routes/studVestimentaRoutes.js");
const v1ColorRoutes = require("./v1/routes/colorRoutes.js");
const v1VeterinarioCaballerizaRoutes = require("./v1/routes/veterinarioCaballerizaRoutes.js");
const v1EntrenadorCaballerizaRoutes = require("./v1/routes/entrenadorCaballerizaRoutes.js");
const v1ColorStudVestimentaRoutes = require("./v1/routes/colorStudVestimentaRoutes.js");
const v1ResultadoRoutes = require("./v1/routes/resultadoRoutes.js");
const v1tipoResultadoRoutes = require("./v1/routes//tipoResultadoRoutes.js");
const v1CuerpoDiferenciaRoutes = require("./v1/routes/cuerpoDiferenciaRoutes.js");
const v1CarreraReglaRoutes = require("./v1/routes/carreraReglaRoutes.js");
const v1ReglaRoutes = require("./v1/routes/reglaRoutes.js");
const v1EventoRoutes = require("./v1/routes/eventoRoutes.js");
const v1ParticipacionImplementoRoutes = require("./v1/routes/participacionImplementoRoutes.js");
const v1ParticipacionMedicamentoRoutes = require("./v1/routes/participacionMedicamentoRoutes.js");
const v1PuestoCaballoRoutes = require("./v1/routes/puestoCaballoRoutes.js");
const v1EjemplarPropietarioRoutes = require("./v1/routes/ejemplarPropietarioRoutes.js");
const v1TipoApuestaRoutes = require("./v1/routes/tipoApuestaRoutes.js");
const v1ReglaTipoApuestaRoutes = require("./v1/routes/reglaTipoApuestaRoutes.js");
const v1ReglaApuesta = require("./v1/routes/reglaApuestaRoutes.js");

// Puerto
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.text());

//const cache = apicache.middleware;
//app.use(cache("2 minutes"));

// Rutas
app.use("/api/v1/jinetes", v1JineteRouter);
app.use("/api/v1/carreras", v1CarreraRouter);
app.use("/api/v1/ejemplares", v1EjemplarRouter);
app.use("/api/v1/entrenadores", v1EntrenadorRouter);
app.use("/api/v1/propietarios", v1PropietarioRouter);
app.use("/api/v1/roles", v1RolRouter);
app.use("/api/v1/studs", v1StudRouter);
app.use("/api/v1/reportes", v1ReporteRouter);
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/haras", v1HaraRouter);
app.use("/api/v1/implementos", v1ImplementoRouter);
app.use("/api/v1/medicamentos", v1MedicamentoRouter);
app.use("/api/v1/rango_jinetes", v1RgoJineteRouter);
app.use("/api/v1/categorias", v1CategoriaCarrerasRouter);
app.use("/api/v1/pelajes", v1PelajeRouter);
app.use("/api/v1/restaurantes", v1RestauranteRouter);
app.use("/api/v1/retiros", v1RetiroRoutes);
app.use("/api/v1/vestimentas", v1VestimentaRoutes);
app.use("/api/v1/veterinarios", v1VeterinarioRoutes);
app.use("/api/v1/caballerizas", v1CaballerizaRoutes);
app.use("/api/v1/telefonos", v1TelefonoRoutes);
app.use("/api/v1/puestos", v1PuestoRoutes);
app.use("/api/v1/areas", v1AreaRoutes);
app.use("/api/v1/lugares", v1LugarRoutes);
app.use("/api/v1/motivos", v1MotivoRetiroRoutes);
app.use("/api/v1/participaciones", v1ParticipacionRoutes);
app.use("/api/v1/propietarios_de_studs", v1PropietarioStudRoutes);
app.use("/api/v1/colores_studs", v1StudColorRoutes);
app.use("/api/v1/vestimentas_studs", v1StudVestimentaRoutes);
app.use("/api/v1/colores", v1ColorRoutes);
app.use("/api/v1/veterinarios_de_caballerizas", v1VeterinarioCaballerizaRoutes);
app.use("/api/v1/entrenadores_de_caballerizas", v1EntrenadorCaballerizaRoutes);
app.use("/api/v1/color_stud_vestimenta", v1ColorStudVestimentaRoutes);
app.use("/api/v1/resultados", v1ResultadoRoutes);
app.use("/api/v1/cuerpos_de_diferencia", v1CuerpoDiferenciaRoutes);
app.use("/api/v1/reglas_de_carreras", v1CarreraReglaRoutes);
app.use("/api/v1/reglas", v1ReglaRoutes);
app.use("/api/v1/eventos", v1EventoRoutes);
app.use("/api/v1/participacion_implementos", v1ParticipacionImplementoRoutes);
app.use("/api/v1/participacion_medicamentos", v1ParticipacionMedicamentoRoutes);
app.use("/api/v1/puesto_caballo", v1PuestoCaballoRoutes);
app.use("/api/v1/ejemplar_propietario", v1EjemplarPropietarioRoutes);
app.use("/api/v1/tipo_resultados", v1tipoResultadoRoutes);
app.use("/api/v1/tipo_apuestas", v1TipoApuestaRoutes);
app.use("/api/v1/regla_tipo_apuesta", v1ReglaTipoApuestaRoutes);
app.use("/api/v1/regla_apuesta", v1ReglaApuesta);


module.exports = { app, PORT };
