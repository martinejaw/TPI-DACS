module.exports = (sequelize, DataType) => {
    //TABLA
    const Calle = sequelize.define('Calles', {
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
    });

    //RELACION
    
    Calle.associate = (models) => {
        Calle.belongsTo(models.Ciudades);
    };

    return Calle;
  
  };