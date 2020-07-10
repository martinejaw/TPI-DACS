const container = require("./libs/container");

const application = container.resolve("app");
const uow = container.resolve("UnitOfWork");

application
  .start()
  .then(uow.startConnection())
  .catch(err => {
    console.log(err);
    process.exit();
  });

