// Exporto una funcion que recibe como parametro app
module.exports = app => {

    //ejecuta la conexion, crea las tablas y luego continua con el server
    //console.log(app.dal.models.ModelosDB.sequelize);

    app.dal.models.ModelosDB.sequelize.sync().done(() => {
        //Iniciar el server
        app.listen(app.get('port'), () =>{
            console.log('Server on port', app.get('port'));
        });
    });  
};

