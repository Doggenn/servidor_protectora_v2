const connection = require('../models/db')

module.exports.getFormularioAdopcion = (req, res) => {

    try {

        connection.query('SELECT * FROM formulario_adopcion', (err, rows) => {
            if (err) {

                res.status(500).send(err)
            } else {
                res.json(rows);
            }
        })

    } catch (e) {

        console.log(err);

    }

}