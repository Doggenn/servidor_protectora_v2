const connection = require('../models/db')

module.exports.getPersonalidad = (req, res) => {

    try {

        connection.query('SELECT * FROM personalidad', (err, rows) => {
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