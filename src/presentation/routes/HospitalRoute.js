
module.exports = app => {
app.route('/hospitales')
    .get((req, res) => {
        Hospitales.findAll({})
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            })
    })
    .post((req, res) => {
        Hospitales.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
}