const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments/dev");

// routes
const Routes = require("../presentation/routes");
const PacienteRoutes = require("../presentation/routes/PacienteRoutes");
const MedicoRoutes = require("../presentation/routes/MedicoRoutes");

// controllers
const { PacienteController, MedicoController } = require("../presentation/controllers/index");

// services
const { PacienteService, MedicoService } = require("../service");

// repositories
const { PacienteRepository, MedicoRepository } = require("../dal/repositories");

// db
const db = require("../dal/entities/index");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    PacienteController: asClass(PacienteController).singleton(),
    PacienteRoutes: asFunction(PacienteRoutes).singleton(),
    MedicoController: asClass(MedicoController).singleton(),
    MedicoRoutes: asFunction(MedicoRoutes).singleton(),
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    PacienteService: asClass(PacienteService).singleton(),
    MedicoService: asClass(MedicoService).singleton(),
  })
  .register({
    PacienteRepository: asClass(PacienteRepository).singleton(),
    MedicoRepository: asClass(MedicoRepository).singleton(),
  });

module.exports = container;