class Consulta {
    constructor(id, comentario, diagnostico, fecha, sintomas) {
      this.fecha = fecha;
      this.id = id;
      this.comentario = comentario;
      this.diagnostico = diagnostico;
      this.sintomas = sintomas;

      this.paciente = null;
      this.medico = null;
    }

    asignarMedico(medico){
      this.medico = medico;
    }

    setPaciente(paciente){
      this.paciente = paciente;
    }


  }
module.exports = Consulta;