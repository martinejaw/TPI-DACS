const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataType) => {
    //TABLA
    const Cuenta = sequelize.define('Cuentas', {
      usuario: {
        type: DataType.STRING,
        primaryKey:true,
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      rol: {
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

    //Hooks
    Cuenta.beforeCreate((cuenta, options, cb) => {
      cuenta.password = bcrypt.hashSync(cuenta.password);
    });

    //RELACION
    Cuenta.associate = (models) => {
        Cuenta.belongsTo(models.Medicos, { foreignKey: { allowNull: true }});
        Cuenta.belongsTo(models.Administradores, { foreignKey: { allowNull: true }});
        Cuenta.hasOne(models.Sesiones);
    };

    return Cuenta;
  
};

