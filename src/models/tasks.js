module.exports = (sequelize, DataType) => {

    const modeloTasks = {
        id: {
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }

    // NOMBRE TABLA, Y SUS FILAS
    const Tasks = sequelize.define('Tasks', modeloTasks);

    // Relacion uno a muchos
    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };

    return Tasks;

};
