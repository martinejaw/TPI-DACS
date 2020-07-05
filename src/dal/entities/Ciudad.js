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
          notEmpty: true,
          is: ["^[a-z]+$",'i']
        }
      },
      createdAt: {
        type: DataType.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataType.DATE,
        defaultValue: new Date()
      }
    });

    //RELACION
    Ciudad.associate = (models) => {
      Ciudad.hasMany(models.Calles);
    };
 
    return Ciudad;
  
  };