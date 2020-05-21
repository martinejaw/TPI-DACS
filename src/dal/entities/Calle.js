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
    /*Calle.associate = (models) => {
      Calle.hasMany(models.Direccion);
    };
    
    Calle.associate = (models) => {
        Calle.BelongsTo(models.Ciudad);
    };*/

    return Calle;
  
  };