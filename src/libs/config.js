module.exports = {
    database: 'tasks', //nombre bbdd
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'tasks-db.sqlite',
        define: {
            underscore: true
        },
        operatorsAliases: false
    }
};