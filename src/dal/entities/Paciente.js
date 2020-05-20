module.exports = (sequelize, DataType) => {
    // NOMBRE TABLA, Y SUS FILAS
    const Paciente = sequelize.define("Pacientes", {
        dni: {
            type: DataType.INTEGER,
            primaryKey:true,
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        apellido: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }    
        },
        fechaNacimiento: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        email: {
            type: DataType.STRING,
            allowNull: true
        },
        telefono: {
            type: DataType.STRING,
            allowNull: false
        },
        sexo: {
            type: DataType.STRING,
            allowNull: false
        }
        //createdAt: sequelize.DATE,
        //updatedAt: sequelize.DATE
    });

    // Relaciones
    Paciente.associate = (models) => {
        Paciente.hasMany(models.Consultas);
        Paciente.hasMany(models.Casos);
        Paciente.belongsToMany(models.EnfermedadesPrevias, {through: 'PacientesEnfermos'});
        //Paciente.belongsTo(models.Direcciones);
    }

    return Paciente;

};
