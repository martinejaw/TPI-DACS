const { Router } = require("express");


module.exports = ( { RecursoController } ) => {
    const router = Router();
    
    router.get('/', RecursoController.getRecursos.bind(RecursoController));
    router.post("/", RecursoController.createRecurso.bind(RecursoController));


    /**
     * @swagger
     * /recurso/ministerio:
     *  get:
     *      description: MINISTERIO - Usar para obtener todos los recursos
     *      produces:
     *          - aplication/json
     *      responses:
     *          '200':
     *              description: Se obtuvieron correctamente todos los recursos de todos hospitales
     *          '412':
     *              description: Error
     */
    router.get("/ministerio", RecursoController.obtenerTodosRecursos.bind(RecursoController));

    router.put("/:id", RecursoController.updateRecurso.bind(RecursoController));

    return router;
}
