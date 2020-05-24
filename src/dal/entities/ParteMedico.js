module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const ParteMedico = sequelize.define('PartesMedicos', {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        estadoVital: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        tratamientos: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        comentario: {
            type: DataType.STRING,
            allowNull: true,
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
    ParteMedico.associate = (models) => {
        ParteMedico.belongsTo(models.Casos, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
        ParteMedico.belongsToMany(models.Sintomas, {through: 'Sintomas_PartesMedicos'});
    };

    return ParteMedico;
}