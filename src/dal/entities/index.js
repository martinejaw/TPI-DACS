const { Sequelize } = require ('sequelize');
const config = require('../../config/environments/dev');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

let db = null;

module.exports = app => {
    if(!db){
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
        
        db = {
            sequelize,
            Sequelize,
            models: {

            }
        };

        fs.readdirSync(__dirname)
            .filter(file => {
                return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
             })
            .forEach(file => {
                const model = sequelize["import"](path.join(__dirname, file));
                db.models[model.name] = model;
            });

        Object.keys(db).forEach(modelName => {
            if (db[modelName].associate) {
                db[modelName].associate(db);
                }
            });

        sequelize.sync();

    }
    return db;
}