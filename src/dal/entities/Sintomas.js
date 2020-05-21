module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const Sintomas = sequelize.define("Sintomas", {
        id: {
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

    // Relaciones
    Sintomas.associate = (models) => {
        Sintomas.belongsToMany(models.Consultas, {through: 'SintomasPaciente'});
        Sintomas.belongsToMany(models.PartesMedicos, {through: 'Sintomas_PartesMedicos'})
    }

    return Sintomas;

};
