module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const EnfermedadesPrevias = sequelize.define("EnfermedadesPrevias", {
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
        },
    });

    // Relaciones
    EnfermedadesPrevias.associate = (models) => {
        EnfermedadesPrevias.belongsToMany(models.Pacientes, {through: 'Pacientes_EnfermedadesPrevias', timestamps: false});
    }

    return EnfermedadesPrevias;

};
