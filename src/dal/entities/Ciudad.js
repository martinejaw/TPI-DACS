module.exports = (sequelize, DataType) => {
    //TABLA
    const Ciudad = sequelize.define('Ciudades', {
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
    /*Ciudad.associate = (models) => {
      Ciudad.hasMany(models.Calle);
    };*/
 
    return Ciudad;
  
  };