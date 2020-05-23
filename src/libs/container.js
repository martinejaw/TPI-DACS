const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments/dev");

// routes
const Routes = require("../presentation/routes");
const CalleRoutes = require("../presentation/routes/CalleRoutes");
const CasoRoutes = require("../presentation/routes/CasoRoutes");
const ConsultaRoutes = require("../presentation/routes/ConsultaRoutes");
const HospitalRoutes = require("../presentation/routes/HospitalRoutes");
const MedicoRoutes = require("../presentation/routes/MedicoRoutes");
const PacienteRoutes = require("../presentation/routes/PacienteRoutes");
const ParteMedicoRoutes = require("../presentation/routes/ParteMedicoRoutes");
const PruebaRoutes = require("../presentation/routes/PruebaRoutes");
const RecursoRoutes = require("../presentation/routes/RecursoRoutes");

// controllers
const Controller = require("../presentation/controllers/index");

// services
const Service  = require("../service");

// repositories
const Repository = require("../dal/repositories");

// db
const db = require("../dal/entities/index");
//const uow = require("../dal/unitOfWork");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    CalleController: asClass(Controller.CalleController).singleton(),
    CasoController: asClass(Controller.CasoController).singleton(),
    ConsultaController: asClass(Controller.ConsultaController).singleton(),
    HospitalController: asClass(Controller.HospitalController).singleton(),
    MedicoController: asClass(Controller.MedicoController).singleton(),
    PacienteController: asClass(Controller.PacienteController).singleton(),
    ParteMedicoController: asClass(Controller.ParteMedicoController).singleton(),
    PruebaController: asClass(Controller.PruebaController).singleton(),
    RecursoController: asClass(Controller.RecursoController).singleton(),
    CalleRoutes: asFunction(CalleRoutes).singleton(),
    CasoRoutes: asFunction(CasoRoutes).singleton(),
    ConsultaRoutes: asFunction(ConsultaRoutes).singleton(),
    HospitalRoutes: asFunction(HospitalRoutes).singleton(),
    MedicoRoutes: asFunction(MedicoRoutes).singleton(),
    PacienteRoutes: asFunction(PacienteRoutes).singleton(),
    ParteMedicoRoutes: asFunction(ParteMedicoRoutes).singleton(),
    PruebaRoutes: asFunction(PruebaRoutes).singleton(),
    RecursoRoutes: asFunction(RecursoRoutes).singleton(),
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    CalleService: asClass(Service.CalleService).singleton(),
    CasoService: asClass(Service.CasoService).singleton(),
    ConsultaService: asClass(Service.ConsultaService).singleton(),
    HospitalService: asClass(Service.HospitalService).singleton(),
    MedicoService: asClass(Service.MedicoService).singleton(),
    PacienteService: asClass(Service.PacienteService).singleton(),
    ParteMedicoService: asClass(Service.ParteMedicoService).singleton(),
    PruebaService: asClass(Service.PruebaService).singleton(),
    RecursoService: asClass(Service.RecursoService).singleton(),
  })
  .register({
    CalleRepository: asClass(Repository.CalleRepository).singleton(),
    CasoRepository: asClass(Repository.CasoRepository).singleton(),
    ConsultaRepository: asClass(Repository.ConsultaRepository).singleton(),
    HospitalRepository: asClass(Repository.HospitalRepository).singleton(),
    MedicoRepository: asClass(Repository.MedicoRepository).singleton(),
    PacienteRepository: asClass(Repository.PacienteRepository).singleton(),
    ParteMedicoRepository: asClass(Repository.ParteMedicoRepository).singleton(),
    PruebaRepository: asClass(Repository.PruebaRepository).singleton(),
    RecursoRepository: asClass(Repository.RecursoRepository).singleton(),
    //UnitOfWork: asClass(uow).singleton(),
  })
  .register({
    AsignacionService: asClass(Service.AsignacionService).singleton(),});

module.exports = container;