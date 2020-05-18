module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const Paciente = sequelize.define("Pacientes", {
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
            type: DataType.DATE,
            allowNull: false,
            validate: {
                isDate: true
            },
            defaultValue: new Date() 
        }
    });

    // Relaciones

    return Paciente;

};
