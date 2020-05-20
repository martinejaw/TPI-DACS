module.exports = (sequelize, DataType) => {

<<<<<<< HEAD
    const modeloCall = {
=======
    const modeloCalle = {
>>>>>>> c5772cd32ef4722dff8be7071b4dfbbb0db36afe
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
