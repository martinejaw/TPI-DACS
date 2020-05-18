const container = require("./presentation/container");

const application = container.resolve("app");
const db = container.resolve("db");

application
  .start()
  .then(async () => {
    await db.sequelize.sync();
  })
  .catch(err => {
    console.log(err);
    process.exit();
    });

/*const express = require("express");
const app = express();
const rutas = require('./presentation/routes/index');
const db = require('./db');

db();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
});

app.use(rutas());*/