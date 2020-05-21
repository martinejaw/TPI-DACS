module.exports = (sequelize, DataType) => {
    //TABLA
    const Ciudad = sequelize.define('Ciudades', {
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
    /*Ciudad.associate = (models) => {
      Ciudad.hasMany(models.Calle);
    };*/
 
    return Ciudad;
  
  };