module.exports = app => {

    const Hospitales = app.dal.models.ModelosDB.models.Hospitales;


    app.route('/hospitales')
        .get((req, res) => {
            Hospitales.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                })
        })
        .post((req, res) => {
            console.log(req);
            Hospitales.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
}