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
    /*Calle.associate = (models) => {
      Calle.hasMany(models.Direccion);
    };
    
    Calle.associate = (models) => {
        Calle.BelongsTo(models.Ciudad);
    };*/

    return Calle;
  
  };