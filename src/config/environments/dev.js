module.exports = {
  PORT: 3000,
  database: 'hospitales_dev', //nombre bbdd
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