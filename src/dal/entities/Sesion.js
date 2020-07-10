module.exports = (sequelize, DataType) => {
    //TABLA
    const Sesion = sequelize.define('Sesiones', {
        uuid: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV1,
            primaryKey: true
        },
        usuario: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        exp: {
            type: DataType.TEXT,
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

    //RELACION
    Sesion.associate = (models) => {
        Sesion.belongsTo(models.Cuentas, { foreignKey: { allowNull: false } });
    };

    return Sesion;

};