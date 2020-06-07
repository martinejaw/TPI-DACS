const { Router } = require("express");

module.exports = function( { HomeRoutes, LoginRoutes, CalleRoutes, CasoRoutes,CiudadRoutes, ConsultaRoutes, HospitalRoutes, MedicoRoutes, PacienteRoutes, ParteMedicoRoutes, PruebaRoutes, RecursoRoutes, ReporteRoutes} ) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use("/calle", CalleRoutes);
  apiRoute.use("/caso", CasoRoutes);
  apiRoute.use("/consulta", ConsultaRoutes);
  apiRoute.use("/ciudad", CiudadRoutes);
  apiRoute.use("/hospital", HospitalRoutes);
  apiRoute.use("/login", LoginRoutes);
  apiRoute.use("/medico", MedicoRoutes);
  apiRoute.use("/paciente", PacienteRoutes);
  apiRoute.use("/partemedico", ParteMedicoRoutes);
  apiRoute.use("/prueba", PruebaRoutes);
  apiRoute.use("/recurso", RecursoRoutes);
  apiRoute.use("/reporte", ReporteRoutes);
  
  apiRoute.use("/home", HomeRoutes);
  router.use("/", apiRoute);

  return router;
};

