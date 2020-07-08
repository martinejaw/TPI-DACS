const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const cors = require('cors');
const middleware = require('../middlewares/auth');
//const asd = require('../presentation/views')

class Server {
  constructor({ config, router, AuthMiddle }) {
    this._config = config;
    this._express = express();
    this._express.use(express.json());

    var corsOptions = {
      origin: '*',
      optionsSuccessStatus: 200,
      allowedHeaders: 'Content-Type,Authorization'
    }

    this._express.use(cors(corsOptions));  // El que permite que entren de todos los origenes
    this._express.options('*', cors()); // Pre-Flight auth para el origen cruzado

    this._express.use(AuthMiddle.isAuth);

    this._express.use(router);

    // Carpetas publicas para poder importar en los HTML DEPRECATED
    this._express.use(express.static(path.join(__dirname, '../../node_modules/vue/dist')));
    this._express.use(express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
    this._express.use(express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));
    this._express.use(express.static(path.join(__dirname, '../../node_modules/vuetify/dist')));
    this._express.use(express.static(path.join(__dirname, '../../node_modules/bootstrap-vue/dist')));
    this._express.use(express.static(path.join(__dirname, '../../node_modules/axios/dist')));

    // Seteo opciones para swagger y defino la ruta correspondiente
    const swaggerOptions = {
      swaggerDefinition: {
        info: {
          title: "API Centros Hospitalarios",
          description: "Una API",
          contact: {
            name: "Grupo 3"
          },
          servers: ["http://localhost:"+this._config.PORT]
        }
      },
      apis: ["src/presentation/routes/*.js"]
    };
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    this._express.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

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