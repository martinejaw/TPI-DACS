module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Direccion = sequelize.define('Direcciones', {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        Numero: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    });

    Direccion.associate = (models) => {
        //Direccion.hasOne(models.Calles_Ciudades);
        Direccion.hasOne(models.Hospitales,{as:'DireccionHospital'});
        Direccion.hasOne(models.Pacientes,{as:'DireccionPaciente'});
        Direccion.hasOne(models.Medicos,{as:'DireccionMedico'});
    };

    return Direccion;
}