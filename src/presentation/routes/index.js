const { Router } = require("express");

module.exports = function( { CalleRoutes, CasoRoutes, ConsultaRoutes, HospitalRoutes, MedicoRoutes, PacienteRoutes, ParteMedicoRoutes, PruebaRoutes, RecursoRoutes} ) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use("/calle", CalleRoutes);
  apiRoute.use("/caso", CasoRoutes);
  apiRoute.use("/consulta", ConsultaRoutes);
  apiRoute.use("/hospital", HospitalRoutes);
  apiRoute.use("/medico", MedicoRoutes);
  apiRoute.use("/paciente", PacienteRoutes);
  apiRoute.use("/partemedico", ParteMedicoRoutes);
  apiRoute.use("/prueba", PruebaRoutes);
  apiRoute.use("/recurso", RecursoRoutes);
  router.use("/", apiRoute);

  return router;
};

