const connection = require('../models/db')

module.exports.getAsociacion = (req, res) => {

    try {

        connection.query('SELECT * FROM asociacion_protectora', (err, rows) => {
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