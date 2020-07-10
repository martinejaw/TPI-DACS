const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


module.exports = ({ config }) => {
    const basename = path.basename(__filename);
    let db = {
        models: {}
    };
    const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.params
    );

    fs.readdirSync(__dirname)
        .filter(file => {
            return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
        })
        .forEach(file => {
            const model = sequelize["import"](path.join(__dirname, file));
            db.models[model.name] = model;
        });

    Object.keys(db.models).forEach(modelName => {
        if (db.models[modelName].associate) {
            db.models[modelName].associate(db.models);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db
}