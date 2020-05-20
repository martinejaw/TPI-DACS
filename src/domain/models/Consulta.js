class Consulta {
    constructor(id,comentario,diagnostico,fecha,sintomas) {
      this.fecha = fecha;
      this.id = id;
      this.comentario = comentario;
      this.diagnostico = diagnostico;
      this.sintomas = sintomas
    }
  }
module.exports = Consulta;