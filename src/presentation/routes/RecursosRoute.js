module.exports = app => {
app.route('/recursos')
.get((req, res) => {
    Recusos.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.nostatus(412).json({msg: error.message});
        })
});
}