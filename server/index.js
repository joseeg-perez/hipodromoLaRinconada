const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();//Para usar las variables de entorno

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

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

app.use("/api/v1/jinetes", v1JineteRouter);
app.use("/api/v1/carreras", v1CarreraRouter);
app.use("/api/v1/ejemplares", v1EjemplarRouter);
app.use("/api/v1/entrenadores", v1EntrenadorRouter);
app.use("/api/v1/propietarios", v1PropietarioRouter);
app.use("/api/v1/roles",v1RolRouter);
app.use("/api/v1/studs",v1StudRouter);
app.use("/api/v1/reportes",v1ReporteRouter);
app.use("/api/v1/auth",v1AuthRouter);
app.use("/api/v1/haras",v1HaraRouter);
app.use("/api/v1/implementos",v1ImplementoRouter);
app.use("/api/v1/medicamentos", v1MedicamentoRouter);
app.use("/api/v1/rango_jinetes",v1RgoJineteRouter);

app.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto ${PORT} :)`);
});