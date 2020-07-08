module.exports = {
  PORT: 3000,
  database: 'hospitales', //nombre bbdd
  username: '',
  password: '',
  params: {
      dialect: 'sqlite',
      storage: 'hospitales.sqlite',
      logging: false,
      define: {
          underscore: true
      }
  }
};
