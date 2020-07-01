const { Router } = require("express");
const cors = require('cors');

module.exports = function( { HomeRoutes, LoginRoutes, CalleRoutes, CasoRoutes,CiudadRoutes, ConsultaRoutes, HospitalRoutes, MedicoRoutes, PacienteRoutes, ParteMedicoRoutes, PruebaRoutes, RecursoRoutes, ReporteRoutes, RegisterRoutes} ) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use("/calle",cors(), CalleRoutes);
  apiRoute.use("/caso",cors(), CasoRoutes);
  apiRoute.use("/consulta",cors(), ConsultaRoutes);
  apiRoute.use("/ciudad",cors(), CiudadRoutes);
  apiRoute.use("/hospital",cors(), HospitalRoutes);
  apiRoute.use("/login",cors(), LoginRoutes);
  apiRoute.use("/medico",cors(), MedicoRoutes);
  apiRoute.use("/paciente",cors(), PacienteRoutes);
  apiRoute.use("/partemedico",cors(), ParteMedicoRoutes);
  apiRoute.use("/prueba",cors(), PruebaRoutes);
  apiRoute.use("/recurso",cors(), RecursoRoutes);
  apiRoute.use("/reporte",cors(), ReporteRoutes);
  apiRoute.use("/registro",cors(), RegisterRoutes);
  
  apiRoute.use("/", HomeRoutes);
  router.use("/", apiRoute);

  return router;
};

