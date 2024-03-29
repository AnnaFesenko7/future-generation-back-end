const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { eventsRouter, authRouter, usersRouter } = require("./routes/api");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../src/swagger.json");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());

// app.use(express.static("public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/auth", authRouter);
app.use("/api/events", eventsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message, status });
});

module.exports = app;
