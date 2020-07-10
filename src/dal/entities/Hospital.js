module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Hospital = sequelize.define('Hospitales', {
        CUIT: {
            type: DataType.BIGINT,
            primaryKey: true,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [11]
            }
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: ["^[a-z]+$", 'i']
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

    Hospital.associate = (models) => {
        Hospital.belongsTo(models.Direcciones);
        Hospital.hasMany(models.Medicos, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
        Hospital.hasMany(models.Administradores, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
        Hospital.hasMany(models.Recursos, { foreignKey: { primaryKey: true }, onDelete: 'CASCADE' });
    };

    return Hospital;

}
