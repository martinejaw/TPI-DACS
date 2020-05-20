class Medico {
    constructor(dni,matricula, nombre, apellido, fechaNacimiento, especialidad) {
      this.dni = dni;
      this.matricula = matricula;
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaNacimiento = fechaNacimiento;
      this.especialidad = especialidad;
    }
  }
module.exports = Medico;