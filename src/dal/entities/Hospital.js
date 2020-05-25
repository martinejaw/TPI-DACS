module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Hospital = sequelize.define('Hospitales', {
        CUIT: {
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
        Hospital.belongsToMany(models.Medicos, {through: 'Medicos_Hospitales',timestamps: false});
        Hospital.hasMany(models.Recursos, { foreignKey: { primaryKey: true }, onDelete: 'CASCADE' });
    };
    
    return Hospital;

}
