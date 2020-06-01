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
      createdAt: {
        type: DataType.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataType.DATE,
        defaultValue: new Date()
      }
    });

    //RELACION
    
    Cuenta.associate = (models) => {
        Cuenta.hasOne(models.Medicos);
        Cuenta.hasOne(models.Administradores);
    };

    return Cuenta;
  
};

