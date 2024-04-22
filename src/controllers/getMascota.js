const connection = require('../models/db')

module.exports.getMascota = (req, res) => {

    try {

        const mascotaId = req.params.id;
        const query = 'SELECT * FROM mascotas WHERE id = ?';
        connection.query(query, [mascotaId], (err, rows) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (rows.length > 0) {
                    res.json(rows[0]);
                } else {
                    res.status(404).send('Mascota no encontrada');
                }
            }
        });


    } catch (e) {

        console.log(err);

    }

}