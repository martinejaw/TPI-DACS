module.exports = (sequelize, DataType) => {

    //TABLA
    const Prueba = sequelize.define('Pruebas', {
      resultado: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          notEmpty: true
        }
      },
      fecha: {
        type: DataType.DATEONLY,
        allowNull: false,
        defaultValue: new Date(),
        validate: {
          notEmpty: true
        }
      },
      fechaResultado: {
        type: DataType.DATE,
        allowNull: false,
        validate: {
            isDate: true
        },
        defaultValue: new Date() 
      }
    });

    //RELACION
    /*Users.associate = (models) => {
      Prueba.hasOne(models.Caso);
    };*/
  
    return Prueba;
  
  };

  //https://sequelize.org/master/manual/model-basics.html#data-types