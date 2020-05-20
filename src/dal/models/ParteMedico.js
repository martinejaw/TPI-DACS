module.exports = (sequelize, DataType) => {

    const modeloParteMedico= {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        estadoVital: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        tratamientos: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        sintomas: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        fecha: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                isDate: true
            },
            defaultValue: new Date() 
        }
    }
    // NOMBRE TABLA, Y SUS FILAS
    const ParteMedico = sequelize.define('PartesMedicos', modeloParteMedico);

    // Relacion uno a muchos
    /*ParteMedico.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };*/
    return ParteMedico;
}