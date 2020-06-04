class UnitOfWork {
    constructor({db, CalleRepository, CasoRepository, CiudadRepository, ConsultaRepository, CuentaRepository, DireccionRepository, HospitalRepository, MedicoRepository,PacienteRepository, ParteMedicoRepository, PruebaRepository, RecursoRepository}) {
        this.db = db;
        this.CalleRepository = CalleRepository;
        this.CasoRepository = CasoRepository;
        this.CiudadRepository = CiudadRepository;
        this.ConsultaRepository = ConsultaRepository;
        this.CuentaRepository = CuentaRepository;
        this.DireccionRepository = DireccionRepository;
        this.HospitalRepository = HospitalRepository;
        this.MedicoRepository = MedicoRepository;
        this.PacienteRepository = PacienteRepository;
        this.ParteMedicoRepository = ParteMedicoRepository;
        this.PruebaRepository = PruebaRepository;
        this.RecursoRepository = RecursoRepository;
    }
    
    async startConnection(){
        let retries = 5;
        while(retries){
            try{
                await this.db.sequelize.sync();
                break;
            }catch (err){
                console.log(err);
                retries -= 1;
                console.log('retries lef: ', retries);
                await new Promise(res => setTimeout(res, 20000));
            }
        }
    }
}

module.exports = UnitOfWork;