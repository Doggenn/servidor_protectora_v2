const connection = require('../models/db')

module.exports.getSaludid = (req, res) => {

    try {
        const saludID = req.params.id;
        const query = 'SELECT * FROM salud WHERE id_mascota = ?';
        connection.query(query, [saludID], (err, rows) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (rows.length > 0) {
                    res.json(rows[0]);

                } else {
                    res.status(404).send('Salud de la mascota no encontrada');
                }
            }
            connection.end();
        });


    } catch (e) {

        console.log(err);

    }

}