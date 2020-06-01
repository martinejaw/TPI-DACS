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
                notEmpty: true,
                isNumeric: true
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
        especialidad: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: ["^[a-z]+$",'i']
            }    
        },
        createdAt: {
          type: DataType.DATE,
          defaultValue: new Date()
        },
        updatedAt: {
          type: DataType.DATE,
          defaultValue: new Date()
        }
    });

    // Relaciones
    Medico.associate = (models) => {
        Medico.hasMany(models.Casos);
        Medico.hasMany(models.Consultas);
        Medico.belongsTo(models.Cuentas);
        Medico.belongsTo(models.Direcciones);
        Medico.belongsToMany(models.Hospitales, {through: 'Medicos_Hospitales',timestamps: false});
    };

    return Medico;

};
