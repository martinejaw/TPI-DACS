const { Router } = require("express");

module.exports = function( { PacienteRoutes } ) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use("/pacientes", PacienteRoutes);
  router.use("/", apiRoute);

  return router;
};

