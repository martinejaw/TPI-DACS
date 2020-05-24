class Consulta {
    constructor(id, comentario, diagnostico, fecha, sintomas) {
      this.fecha = fecha;
      this.id = id;
      this.comentario = comentario;
      this.diagnostico = diagnostico;
      this.sintomas = sintomas;

      this.PacienteDni = null;
    }

    asignarMedico(medico){
      this.medicodni = medico;
    }

    setPaciente(pacientedni){
      this.PacienteDni = pacientedni;
    }

    toObject(){
      return {
        id: this.id,
        PacienteDni: this.PacienteDni,
        MedicoDni: this.medicodni
      }
    }


  }
module.exports = Consulta;