module.exports = (sequelize, DataType) => {
    //TABLA
    const Calle = sequelize.define('Calles', {
      nombre: {
        type: DataType.STRING,
        primaryKey:true,
        defaultValue: false,
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