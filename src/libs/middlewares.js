const express = require('express');
//const bodyParser = require('body-parser');

module.exports = app => {
    // Configuraciones

    app.set('port', process.env.PORT || 3000);
    
    //app.use(bodyParser.json());
    // middlewares
    // es una funcion que se ejecuta antes de procesar los datos
    
    // recibo lo que me mandan y lo entiendo
    // asi vamos a recibir los datos, y vamos a almacenar en la base de datos
    app.use(express.json());

    //HEADER MENSAJES Content-Type: application/json

};