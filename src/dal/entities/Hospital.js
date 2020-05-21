module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Hospital = sequelize.define('Hospitales', {
<<<<<<< HEAD
        CUIT: {
=======
        cuit: {
>>>>>>> ff7867093243797591ce596c3b5e60510cbf04d6
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

<<<<<<< HEAD
=======
    Hospital.associate = (models) => {
        Hospital.belongsTo(models.Direcciones,{as:'DireccionHospital'});
        //Hospital.hasMany(models.Recursos);
        Hospital.belongsToMany(models.Medicos, {through: 'Medicos_Hospitales'});
    };
    
>>>>>>> ff7867093243797591ce596c3b5e60510cbf04d6
    return Hospital;

}
