module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Caso = sequelize.define('Casos', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaInicio: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                isDate: true
            },
            defaultValue: new Date()
        },
        estado: {
            type: DataType.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        dni: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [7, 8]
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

    // Relacion uno a muchos
    Caso.associate = (models) => {
        Caso.belongsTo(models.Medicos, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
        Caso.hasMany(models.PartesMedicos, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
        Caso.hasMany(models.Pruebas, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    };
    return Caso;

};
