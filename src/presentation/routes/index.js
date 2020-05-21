const { Router } = require("express");

<<<<<<< HEAD
module.exports = function( { CalleRoutes, CasoRoutes, ConsultaRoutes, HospitalRoutes, MedicoRoutes, PacienteRoutes, ParteMedicoRoutes, PruebaRoutes, RecursoRoutes} ) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use("/calle", CalleRoutes);
  apiRoute.use("/caso", CasoRoutes);
  apiRoute.use("/consulta", ConsultaRoutes);
  apiRoute.use("/hospital", HospitalRoutes);
  apiRoute.use("medico", MedicoRoutes);
  apiRoute.use("/paciente", PacienteRoutes);
  apiRoute.use("/partemedico", ParteMedicoRoutes);
  apiRoute.use("/prueba", PruebaRoutes);
  apiRoute.use("/recurso", RecursoRoutes);
=======
module.exports = function( { PacienteRoutes, MedicoRoutes } ) {
  const router = Router();
  const apiRoute = Router();


  apiRoute.use("/pacientes", PacienteRoutes);
  apiRoute.use("/medicos", MedicoRoutes);
>>>>>>> ff7867093243797591ce596c3b5e60510cbf04d6
  router.use("/", apiRoute);

  return router;
};

