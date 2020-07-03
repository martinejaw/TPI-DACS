const BaseRepository = require("./base.repository");
const sequelize = require("./base.repository")
const { QueryTypes } = require('sequelize');

class MedicoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Medicos");
  }

  async getMedicoLibre(){
    const consulta = "SELECT dni FROM (SELECT Medicos.dni,COUNT(id) AS cont FROM Medicos LEFT OUTER JOIN (SELECT * FROM Consultas WHERE date(Consultas.createdAt) = date('now')) AS C ON Medicos.dni = C.MedicoDni GROUP BY Medicos.dni ORDER BY cont ASC LIMIT 1);"
    return await this._db.sequelize.query(consulta, {
      nest: true,
      type: QueryTypes.SELECT
    });
  }

  async obtenerMedicosHospital(CUIT){
    const consulta = "SELECT dni, matricula, apellido, fechaNacimiento, especialidad, M.createdAt, M.updatedAt FROM Medicos AS M INNER JOIN Medicos_Hospitales AS MH ON M.dni = MH.MedicoDni WHERE HospitaleCUIT = "+CUIT+";";

    return await this._db.sequelize.query(consulta, {
      nest: true,
      type: QueryTypes.SELECT
    });
  }

  async cantidadEspecialidad(CUIT, especialidad){

    return this._db.models[this.entity].count({where: {especialidad: especialidad, HospitaleCUIT: CUIT}});

  }

}

module.exports = MedicoRepository;

/*
SELECT COUNT(id)
FROM  Medicos NATURAL JOIN
      (SELECT * FROM Consultas WHERE createdAt= date('now'));

SELECT dni
FROM
(SELECT Medicos.dni,COUNT(id) as cont
FROM Medicos INNER JOIN Consultas ON Medicos.dni = Consultas.MedicoDni
WHERE date(Consultas.createdAt) = date('now')
GROUP BY Medicos.dni
ORDER BY cont ASC
LIMIT 1);



*/