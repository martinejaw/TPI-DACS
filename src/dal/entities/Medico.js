module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Medico = sequelize.define('Medicos',{
        dni: {
            type: DataType.INTEGER,
            primaryKey:true,
        },
        matricula: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
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
            }
        },
        especialidad: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }    
        }
    });

    // Relaciones
    Medico.associate = (models) => {
        Medico.hasMany(models.Casos);
    };

    return Medico;

};