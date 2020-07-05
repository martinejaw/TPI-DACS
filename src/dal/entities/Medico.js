module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Medico = sequelize.define('Medicos',{
        dni: {
            type: DataType.INTEGER,
            primaryKey:true,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [7,8]
            }
        },
        matricula: {
            type: DataType.INTEGER,
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
        Medico.hasOne(models.Cuentas);
        Medico.belongsTo(models.Hospitales);
    };

    return Medico;

};
