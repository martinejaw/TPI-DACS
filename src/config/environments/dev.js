module.exports = {
  PORT: 3000,
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
