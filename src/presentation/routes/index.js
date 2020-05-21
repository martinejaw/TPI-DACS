const { Router } = require("express");

module.exports = function( { PacienteRoutes, MedicoRoutes } ) {
  const router = Router();
  const apiRoute = Router();


  apiRoute.use("/pacientes", PacienteRoutes);
  apiRoute.use("/medicos", MedicoRoutes);
  router.use("/", apiRoute);

  return router;
};

