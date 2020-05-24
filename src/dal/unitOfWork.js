class UnitOfWork {
    constructor({db, CalleRepository, CasoRepository, CiudadRepository, ConsultaRepository, DireccionRepository, HospitalRepository, MedicoRepository,PacienteRepository, ParteMedicoRepository, PruebaRepository, RecursoRepository}) {
        this.db = db;
        this.CalleRepository = CalleRepository;
        this.CasoRepository = CasoRepository;
        this.CiudadRepository = CiudadRepository;
        this.ConsultaRepository = ConsultaRepository;
        this.DireccionRepository = DireccionRepository;
        this.HospitalRepository = HospitalRepository;
        this.MedicoRepository = MedicoRepository;
        this.PacienteRepository = PacienteRepository;
        this.ParteMedicoRepository = ParteMedicoRepository;
        this.PruebaRepository = PruebaRepository;
        this.RecursoRepository = RecursoRepository;
    }
    
    async startConnection(){
        return await this.db.sequelize.sync();
    }

}

module.exports = UnitOfWork;