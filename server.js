const express = require("express");

const app = express();
const userRoutes = require("./user/routes");

const logRoute = (req, res, next) => {
  console.info(`Llamando a la ruta: ${req.method} ${req.path}`);
  next();
};

//app.use(cors())

app.use(logRoute);

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("Hola que tal");
});

//Namespace de user
app.use("/user", userRoutes);

app.use((req, res) => {
  res.status(404).send({ type: "error", msg: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.log("Estoy controlando el error");
  res.status(500).send({ type: "error", message: err.message });
});

app.listen(3000, () => {
  console.log("Server running");
});
