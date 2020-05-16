module.exports = (sequelize, DataType) => {

    const modeloCasos = {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        fechaInicio: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                isDate: true
            },
            defaultValue: new Date() 
        }
    }

    // NOMBRE TABLA, Y SUS FILAS
    const Caso = sequelize.define('Casos', modeloCasos);

    // Relacion uno a muchos
    /*
    Tasks.associate = (models) => {
        Caso.belongsTo(models.Users);
    };*/

    return Caso;

};
