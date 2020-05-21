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
    });

    // Relaciones
    Paciente.associate = (models) => {
        Paciente.hasMany(models.Consultas, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
        Paciente.hasMany(models.Casos);
<<<<<<< HEAD
        Paciente.belongsToMany(models.EnfermedadesPrevias, {through: 'Pacientes_EnfermedadesPrevias'});
        //Paciente.belongsTo(models.Direcciones);
=======
        Paciente.belongsToMany(models.EnfermedadesPrevias, {through: 'PacientesEnfermos'});
        Paciente.belongsTo(models.Direcciones,{as:'DireccionPaciente'});
>>>>>>> ff7867093243797591ce596c3b5e60510cbf04d6
    }

    return Paciente;

};
