module.exports = (sequelize, DataType) => {

    //TABLA
    const Recurso = sequelize.define('Recursos', {
      id: {
        type: DataType.INTEGER,
        primaryKey:true,
      },
      nombre: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: ["^[a-z]+$",'i']
        }
      },
      cantidad: {
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isNumeric: true,
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
    Recurso.associate = (models) => {
      Recurso.belongsTo(models.Hospitales);
    };
  
    return Recurso;
  
  };

