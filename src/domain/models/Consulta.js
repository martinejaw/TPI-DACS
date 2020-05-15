class Consulta {
    constructor(id,consulta,diagnostico,fecha) {
      this.fecha = fecha;
      this.id = id;
      this.consulta = consulta;
      this.diagnostico = diagnostico;
    }
  }
  module.exports = Consulta;