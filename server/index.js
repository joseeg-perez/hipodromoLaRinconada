const { app, PORT } = require("./app.js");

app.listen(PORT, () => {
  console.log(`Servidor conectado en el puerto ${PORT} :)`);
});

