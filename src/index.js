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

