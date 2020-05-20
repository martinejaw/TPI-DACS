module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Medico = sequelize.define('Medicos',{
        matricula: {
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
        apellido: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }    
        },
    });

    // Relaciones
    Medico.associate = (models) => {
        Medico.hasMany(models.Casos);
    };

    return Medico;

};