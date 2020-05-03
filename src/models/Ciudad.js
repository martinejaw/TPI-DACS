module.exports = (sequelize, DataType) => {

    const Ciudad ={
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
    const Ciudad = sequelize.define('Ciudad', modeloCiudad);

    //RELACION
    Ciudad.associate = (models) => {
      Ciudad.hasMany(models.Calle);
    };
 
    return Ciudad;
  
  };