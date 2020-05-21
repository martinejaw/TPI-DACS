module.exports = (sequelize, DataType) => {

    //TABLA
    const Recurso = sequelize.define('Recursos', {
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
      cantidad: {
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notEmpty: true
        }
      }
    });

    //RELACION
    Recurso.associate = (models) => {
      Recurso.hasOne(models.Hospitales);
    };
  
    return Recurso;
  
  };

