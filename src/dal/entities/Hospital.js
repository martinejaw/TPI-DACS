module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Hospital = sequelize.define('Hospitales', {
        cuit: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombreHospital: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Hospital.associate = (models) => {
        Hospital.belongsTo(models.Direcciones,{as:'DireccionHospital'});
        //Hospital.hasMany(models.Recursos);
        Hospital.belongsToMany(models.Medicos, {through: 'Medicos_Hospitales'});
    };
    
    return Hospital;

}
