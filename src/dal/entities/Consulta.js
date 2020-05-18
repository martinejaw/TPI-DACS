module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const Consulta = sequelize.define('Consultas', {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        consulta: {
            type: DataType.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        diagnostico: {
            type: DataType.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        fecha: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                isDate: true
            },
            defaultValue: new Date() 
        }
    });

    // Relacion uno a muchos
    /*Tasks.associate = (models) => {
        Consulta.belongsTo(models.Users);
    };*/

    return Consulta;

};
