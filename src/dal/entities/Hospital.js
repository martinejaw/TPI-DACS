module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Hospital = sequelize.define('Hospitales', {
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
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    /* Relacion uno a muchos
    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };
    */
    return Hospital;

}
