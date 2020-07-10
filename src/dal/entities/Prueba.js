module.exports = (sequelize, DataType) => {

  //TABLA
  const Prueba = sequelize.define('Pruebas', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    resultado: {
      type: DataType.BOOLEAN,
      allowNull: true
    },
    fecha: {
      type: DataType.DATEONLY,
      allowNull: false,
      defaultValue: new Date(),
      validate: {
        isDate: true
      }
    },
    fechaResultado: {
      type: DataType.DATE,
      allowNull: true,
      validate: {
        isDate: true
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
  Prueba.associate = (models) => {
    Prueba.belongsTo(models.Casos, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
  };

  return Prueba;

};


