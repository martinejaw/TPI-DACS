module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const Consulta = sequelize.define('Consultas', {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
	    dni: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [7,8]
            }
        },
        comentario: {
            type: DataType.TEXT,
            allowNull: true
        },
        diagnostico: {
            type: DataType.TEXT,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        createdAt: {
          type: DataType.DATE,
          defaultValue: new Date()
        },
        updatedAt: {
          type: DataType.DATE,
          defaultValue: new Date()
        }
    });

    // Relacion uno a muchos
    Consulta.associate = (models) => {
	    Consulta.belongsTo(models.Medicos, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    };

    return Consulta;

};
