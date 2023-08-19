const express = require("express");
const app = express();

const usersRoutes = require("./api/routes/users");

app.use("/users", usersRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested resource was not found.",
    availableRoutes: [
      "/users",
      "/users/:username/details",
      "/users/:username/repos",
    ],
  });
});

module.exports = app;
