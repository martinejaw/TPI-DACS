module.exports = (sequelize, DataType) => {

    const modeloMedico = {
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
    }

    // NOMBRE TABLA, Y SUS FILAS
    const Medico = sequelize.define('Medicos', modeloMedicos);

    // Relaciones

    return Medico;

};