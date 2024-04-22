const connection = require('../models/db')

module.exports.getSalud = (req, res) => {

    try {

        connection.query('SELECT * FROM salud', (err, rows) => {
            if (err) {

                res.status(500).send(err)
            } else {
                res.status(200).send(rows)
            }
        })


    } catch (e) {

        console.log(err);

    }

}