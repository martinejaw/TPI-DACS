const express = require("express");

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(express.json());
    this._express.use(router);

    // Devolver todos los errores como json
    const jsonErrorHandler = async (err, req, res, next) => {
      res.status(500).send({ msg: err.type });
    }
    this._express.use(jsonErrorHandler);

  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log("Application running on port " + port);
        resolve();
      });
    });
  }
}

module.exports = Server;