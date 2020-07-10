module.exports = (sequelize, DataType) => {

    // NOMBRE TABLA, Y SUS FILAS
    const Administrador = sequelize.define('Administradores', {
        dni: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [7, 8]
            }
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: ["^[a-z]+$", 'i']
            }
        },
        apellido: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                is: ["^[a-z]+$", 'i']
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
    Administrador.associate = (models) => {
        Administrador.hasOne(models.Cuentas);
        Administrador.belongsTo(models.Hospitales, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    };

    return Administrador;

};
