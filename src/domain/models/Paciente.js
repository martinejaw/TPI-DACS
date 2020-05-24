class Paciente {
    constructor(dni, nombre, apellido, fechaNacimiento, email, telefono, sexo, enfermedadesPrevias, direccion) {
      this.dni = dni;
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaNacimiento = fechaNacimiento;
      this.email = email;
      this.telefono = telefono;
      this.sexo = sexo;
      this.enfermedadesPrevias = enfermedadesPrevias;
      this.direccion = direccion;
    }
  }
module.exports = Paciente;