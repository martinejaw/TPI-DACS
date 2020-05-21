module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Hospital = sequelize.define('Hospitales', {
        CUIT: {

            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    Hospital.associate = (models) => {
        Hospital.belongsTo(models.Direcciones);
        Hospital.hasMany(models.Recursos);
        Hospital.belongsToMany(models.Medicos, {through: 'Medicos_Hospitales'});
    };
    
    return Hospital;

}
