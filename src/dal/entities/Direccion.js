module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Direccion = sequelize.define('Direcciones', {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        Numero: {
            type: DataType.INTEGER,
            allowNull: false,
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

    Direccion.associate = (models) => {
        Direccion.belongsTo(models.Calles);
        Direccion.hasOne(models.Hospitales);
    };

    return Direccion;
}
