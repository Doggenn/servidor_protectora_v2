const connection = require('../models/db')

module.exports.getEventos = (req, res) => {

    try {

        connection.query('SELECT * FROM eventos', (err, rows) => {
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