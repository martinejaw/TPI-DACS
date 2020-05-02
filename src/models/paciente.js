module.exports = (sequelize, DataType) => {

    const modeloPaciente = {
        dni: {
            type: DataType.INTEGER,
            primaryKey:true,
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        apellido: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }    
        },
        fechaNacimiento: {
            type: DataType.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
            }
        }
    }

    // NOMBRE TABLA, Y SUS FILAS
    const Paciente = sequelize.define('Pacientes', modeloPaciente);

    // Relaciones

    return Paciente;

};
