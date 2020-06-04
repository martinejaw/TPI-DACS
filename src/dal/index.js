const { Sequelize } = require ('sequelize');
//const config = require('../config/environments/dev');
const config = require('../config/environments/prod');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
let db = {
    models: {}
};

class DbContext{
    constructor({config}){
        this.sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
        this.Sequelize = Sequelize;
        this.inicializarModelos();
    }

    inicializarModelos(){
        fs.readdirSync(__dirname)
            .filter(file => {
                return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
            })
            .forEach(file => {
                const model = this.sequelize["import"](path.join(__dirname, file));
                this.models[model.name] = model;
            });

        Object.keys(this.models).forEach(modelName => {
            if (this.models[modelName].associate) {
                this.models[modelName].associate(this.models);
            }
        });
    }
}

module.exports = DbContext;

    