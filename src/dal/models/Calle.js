module.exports = (sequelize, DataType) => {

    const Calle = {
      nombre: {
        type: DataType.STRING,
        primaryKey:true,
        defaultValue: false,
        validate: {
          notEmpty: true
        }
      },
    }

    //TABLA
    const Calle = sequelize.define('Calles', modeloCalle);

    //RELACION
    Calle.associate = (models) => {
      Calle.hasMany(models.Direccion);
    };
    
    Calle.associate = (models) => {
        Calle.BelongsTo(models.Ciudad);
    };

    return Calle;
  
  };