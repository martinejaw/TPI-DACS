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
    
    Calle.associate = (models) => {
        Calle.belongsTo(models.Ciudades);
        Calle.hasMany(models.Direcciones);
    };

    return Calle;
  
  };