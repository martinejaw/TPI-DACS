const express = require('express')
const swaggerUi = require('swagger-ui-express')
const consign = require('consign');

const app = express()

const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "API Rest Centros Hospitalarios",
        "description": "",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
        "/hospitales": {
            "get":{
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/hospitales"],
                "get":{
                    "description": "Algo xdxdxd"
                }
            }
        },
        "/test": {
            "post": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/test"],
                "description": "[Login 123](https://www.google.com)",
                "parameters": [{
                    "name": "test",
                    "in": "formData",
                    "type": "array",
                    "collectionFormat": "multi",
                    "items": {
                        "type": "integer"
                    }
                },
                { "name": "profileId", "in": "formData", "required": true, "type": "string" },
                { "name": "file", "in": "formData", "type": "file", "required": "true" }],
                "responses": {}
            }
        },
        "/bar": {
            "get": {
                "x-swagger-router-controller": "bar",
                "operationId": "impossible",
                "tags": ["/test"],
                "description": "",
                "parameters": [],
                "responses": {}
            }
        }
    }
};
const swaggerDocumentSplit = swaggerDocument;

var options = {
    validatorUrl: null,
    oauth: {
        clientId: "your-client-id1",
        clientSecret: "your-client-secret-if-required1",
        realm: "your-realms1",
        appName: "your-app-name1",
        scopeSeparator: ",",
        additionalQueryStringParams: {}
    },
    docExpansion: 'full',
    operationsSorter: function (a, b) {
        var score = {
            '/test': 1,
            '/bar': 2
        }
        console.log('a', a.get("path"), b.get("path"))
        return score[a.get("path")] < score[b.get("path")]
    }
};

app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs', swaggerUi.setup(swaggerDocument, false, options, '.swagger-ui .topbar { background-color: red }'));

consign({
    cwd: __dirname // usa la direccion del archivo actual
})
    .include('libs/config.js') // Config BBDD
    .then('dal/models/ModelosDB.js')              // Config conexion y modelos que uso de la BBDD
    .then('libs/middlewares.js')   // Conf express
    .then('presentation/routes')                 // Rutas express
    .then('libs/boot.js')   // Creo las tablas e inicio el servidor
    .into(app); // Todos necesitan express, asi que lo paso a todos los modulos

console.log("Escuchando");
