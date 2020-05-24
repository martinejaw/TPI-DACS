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

    toObject(){
      return {
        dni: this.dni,
        nombre: this.nombre
      }
    }
  }
module.exports = Paciente;