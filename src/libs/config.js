module.exports = {
    database: 'hospitales', //nombre bbdd
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'hospitales.sqlite',
        define: {
            underscore: true
        },
        operatorsAliases: false
    }
};