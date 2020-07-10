class UnitOfWork {
    constructor({ db, CalleRepository, CasoRepository, CiudadRepository, ConsultaRepository, CuentaRepository, DireccionRepository, HospitalRepository, MedicoRepository, ParteMedicoRepository, PruebaRepository, RecursoRepository, AdministradorRepository, SesionRepository }) {
        this.db = db;
        this.CalleRepository = CalleRepository;
        this.CasoRepository = CasoRepository;
        this.CiudadRepository = CiudadRepository;
        this.ConsultaRepository = ConsultaRepository;
        this.CuentaRepository = CuentaRepository;
        this.DireccionRepository = DireccionRepository;
        this.HospitalRepository = HospitalRepository;
        this.MedicoRepository = MedicoRepository;
        this.ParteMedicoRepository = ParteMedicoRepository;
        this.PruebaRepository = PruebaRepository;
        this.RecursoRepository = RecursoRepository;
        this.AdministradorRepository = AdministradorRepository;
        this.SesionRepository = SesionRepository;
    }

    async startConnection() {
        let retries = 5;
        while (retries) {
            try {
                await this.db.sequelize.sync();
                break;
            } catch (err) {
                console.log(err);
                retries -= 1;
                console.log('retries lef: ', retries);
                await new Promise(res => setTimeout(res, 20000));
            }
        }
    }
}

module.exports = UnitOfWork;