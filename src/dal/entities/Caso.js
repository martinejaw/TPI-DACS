module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Caso = sequelize.define('Casos', {
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
        },
        estado: {
            type: DataType.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    // Relacion uno a muchos
    Caso.associate = (models) => {
        Caso.belongsTo(models.Pacientes);
        Caso.belongsTo(models.Medicos);
        Caso.hasOne(models.Consultas);
        Caso.hasMany(models.PartesMedicos);
        Caso.hasMany(models.Pruebas);
    };
    return Caso;

};
