module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const Paciente = sequelize.define("Pacientes", {
        dni: {
            type: DataType.INTEGER,
            primaryKey:true,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [7,8]
            }
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: ["^[a-z]+$",'i']
            }
        },
        apellido: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: ["^[a-z]+$",'i']
            }    
        },
        fechaNacimiento: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        telefono: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        sexo: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isIn: [['Masculino', 'Femenino']]
            }
        }
    });

    // Relaciones
    Paciente.associate = (models) => {
        Paciente.hasMany(models.Consultas, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
        Paciente.hasMany(models.Casos);
        Paciente.belongsToMany(models.EnfermedadesPrevias, {through: 'Pacientes_EnfermedadesPrevias'});
        Paciente.belongsTo(models.Direcciones, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    }

    return Paciente;

};
