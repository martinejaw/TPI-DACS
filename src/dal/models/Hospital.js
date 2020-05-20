module.exports = (sequelize, DataType) => {

    const modeloHospital = {
        id: {
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
        }
    }

    // NOMBRE TABLA, Y SUS FILAS
    const Hospital = sequelize.define('Hospitales', modeloHospital);

    /* Relacion uno a muchos
    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };
    */
    return Hospital;

}
