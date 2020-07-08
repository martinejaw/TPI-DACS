const { Router } = require("express");
const cors = require('cors');
const AdministradorRoutes = require("./AdministradorRoutes");

module.exports = function( { AdministradorRoutes, LoginRoutes, CalleRoutes, CasoRoutes,CiudadRoutes, ConsultaRoutes, HospitalRoutes, MedicoRoutes, ParteMedicoRoutes, PruebaRoutes, RecursoRoutes, ReporteRoutes, RegisterRoutes} ) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use("/administrador",AdministradorRoutes);
  apiRoute.use("/calle", CalleRoutes);
  apiRoute.use("/caso", CasoRoutes);
  apiRoute.use("/consulta", ConsultaRoutes);
  apiRoute.use("/ciudad", CiudadRoutes);
  apiRoute.use("/hospital", HospitalRoutes);
  apiRoute.use("/login", LoginRoutes);
  apiRoute.use("/medico", MedicoRoutes);
  apiRoute.use("/partemedico", ParteMedicoRoutes);
  apiRoute.use("/prueba", PruebaRoutes);
  apiRoute.use("/recurso", RecursoRoutes);
  apiRoute.use("/reporte", ReporteRoutes);
  apiRoute.use("/registro", RegisterRoutes);
  
  router.use("/", apiRoute);

  return router;
};

