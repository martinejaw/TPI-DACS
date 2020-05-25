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

    // Relaciones
    Sintomas.associate = (models) => {
        Sintomas.belongsToMany(models.Consultas, {through: 'Sintomas_Consultas', timestamps: false});
        Sintomas.belongsToMany(models.PartesMedicos, {through: 'Sintomas_PartesMedicos', timestamps: false })
    }

    return Sintomas;

};
