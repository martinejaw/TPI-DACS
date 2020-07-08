const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments/dev");

// routes
const Routes = require("../presentation/routes");
const AdministradorRoutes = require("../presentation/routes/AdministradorRoutes");
const CalleRoutes = require("../presentation/routes/CalleRoutes");
const CasoRoutes = require("../presentation/routes/CasoRoutes");
const CiudadRoutes = require("../presentation/routes/CiudadRoutes");
const ConsultaRoutes = require("../presentation/routes/ConsultaRoutes");
const HospitalRoutes = require("../presentation/routes/HospitalRoutes");
const LoginRoutes = require("../presentation/routes/LoginRoutes");
const MedicoRoutes = require("../presentation/routes/MedicoRoutes");
const ParteMedicoRoutes = require("../presentation/routes/ParteMedicoRoutes");
const PruebaRoutes = require("../presentation/routes/PruebaRoutes");
const RecursoRoutes = require("../presentation/routes/RecursoRoutes");
const ReporteRoutes = require("../presentation/routes/ReporteRoutes");
const RegisterRoutes = require("../presentation/routes/RegisterRoutes");

// controllers
const Controller = require("../presentation/controllers/index");

// services
const Service  = require("../service");

// repositories
const Repository = require("../dal/repositories");

// Middlewares
const AuthMiddle = require('../middlewares/auth');

// db
const db = require("../dal/entities");
const uow = require("../dal/unitOfWork");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    AdministradorController: asClass(Controller.AdministradorController).singleton(),
    CalleController: asClass(Controller.CalleController).singleton(),
    CasoController: asClass(Controller.CasoController).singleton(),
    CiudadController: asClass(Controller.CiudadController).singleton(),
    ConsultaController: asClass(Controller.ConsultaController).singleton(),
    HospitalController: asClass(Controller.HospitalController).singleton(),
    LoginController: asClass(Controller.LoginController).singleton(),
    MedicoController: asClass(Controller.MedicoController).singleton(),
    PruebaController: asClass(Controller.PruebaController).singleton(),
    RecursoController: asClass(Controller.RecursoController).singleton(),
    ReporteController: asClass(Controller.ReporteController).singleton(),
    ParteMedicoController: asClass(Controller.ParteMedicoController).singleton(),
    AdministradorRoutes: asFunction(AdministradorRoutes).singleton(),
    CalleRoutes: asFunction(CalleRoutes).singleton(),
    CiudadRoutes: asFunction(CiudadRoutes).singleton(),
    CasoRoutes: asFunction(CasoRoutes).singleton(),
    ConsultaRoutes: asFunction(ConsultaRoutes).singleton(),
    HospitalRoutes: asFunction(HospitalRoutes).singleton(),
    LoginRoutes: asFunction(LoginRoutes).singleton(),
    MedicoRoutes: asFunction(MedicoRoutes).singleton(),
    ParteMedicoRoutes: asFunction(ParteMedicoRoutes).singleton(),
    PruebaRoutes: asFunction(PruebaRoutes).singleton(),
    RecursoRoutes: asFunction(RecursoRoutes).singleton(),
    ReporteRoutes: asFunction(ReporteRoutes).singleton(),
    RegisterRoutes: asFunction(RegisterRoutes).singleton(),
  })
  .register({
    config: asValue(config),
    AuthMiddle: asClass(AuthMiddle).singleton(),
  })
  .register({
    db: asFunction(db),
    UnitOfWork: asClass(uow).singleton(),
  })
  .register({
    AdministradorService: asClass(Service.AdministradorService).singleton(),
    CalleService: asClass(Service.CalleService).singleton(),
    CasoService: asClass(Service.CasoService).singleton(),
    CiudadService: asClass(Service.CiudadService).singleton(),
    ConsultaService: asClass(Service.ConsultaService).singleton(),
    HospitalService: asClass(Service.HospitalService).singleton(),
    LoginService: asClass(Service.LoginService).singleton(),
    MedicoService: asClass(Service.MedicoService).singleton(),
    ParteMedicoService: asClass(Service.ParteMedicoService).singleton(),
    PruebaService: asClass(Service.PruebaService).singleton(),
    RecursoService: asClass(Service.RecursoService).singleton(),
    DiagnosticoService: asClass(Service.DiagnosticoService).singleton(),
    ReporteService: asClass(Service.ReporteService).singleton(),
  })
  .register({
    AdministradorRepository: asClass(Repository.AdministradorRepository).singleton(),
    CalleRepository: asClass(Repository.CalleRepository).singleton(),
    CasoRepository: asClass(Repository.CasoRepository).singleton(),
    CiudadRepository: asClass(Repository.CiudadRepository).singleton(),
    ConsultaRepository: asClass(Repository.ConsultaRepository).singleton(),
    DireccionRepository: asClass(Repository.DireccionRepository).singleton(),
    HospitalRepository: asClass(Repository.HospitalRepository).singleton(),
    CuentaRepository: asClass(Repository.CuentaRepository).singleton(),
    MedicoRepository: asClass(Repository.MedicoRepository).singleton(),
    ParteMedicoRepository: asClass(Repository.ParteMedicoRepository).singleton(),
    PruebaRepository: asClass(Repository.PruebaRepository).singleton(),
    RecursoRepository: asClass(Repository.RecursoRepository).singleton(),
  })
  .register({
    AsignacionService: asClass(Service.AsignacionService).singleton(),});

module.exports = container;
