module.exports = (sequelize, DataType) => {

    const Calle = sequelize.define('Calle', {
      nombre: {
        type: DataType.STRING,
        primaryKey:true,
        defaultValue: false,
        validate: {
          notEmpty: true
        }
      },
    });

    //TABLA
    const Calle = sequelize.define('Calle', modeloCalle);

    //RELACION
    Calle.associate = (models) => {
      Calle.hasMany(models.Direccion);
    };
    
    Calle.associate = (models) => {
        Calle.BelongsTo(models.Ciudad);
    };

    return Calle;
  
  };