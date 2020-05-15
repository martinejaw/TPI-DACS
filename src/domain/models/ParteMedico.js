class ParteMedico {
    constructor(id,estadoVital,tratamientos,fecha,sintomas) {
        this.fecha = fecha;
        this.id = id;
        this.estadoVital = estadoVital;
        this.tratamientos = tratamientos;
        this.sintomas = sintomas;
      }
  }
  module.exports = ParteMedico;