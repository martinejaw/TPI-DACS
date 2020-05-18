const { Sequelize } = require ('sequelize');
const config = require('./config/environments/dev');
const fs = require('fs');
const path = require('path');

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
        
        const dir = path.join(__dirname,'dal/entities');
        fs.readdirSync(dir).forEach(filename => {
            const entityDir = path.join(dir, filename);
            const model = sequelize.import(entityDir);
            db.models[model.name] = model;
        });

    }
    return db;
}