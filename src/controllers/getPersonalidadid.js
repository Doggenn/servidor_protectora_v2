const connection = require('../models/db')

module.exports.getPersonalidadid = (req, res) => {

    try {

        const personalidadId = req.params.id;
        const query = 'SELECT * FROM personalidad WHERE id_mascota = ?';
        connection.query(query, [personalidadId], (err, rows) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (rows.length > 0) {
                    res.json(rows[0]);
                } else {
                    res.status(404).send('Personalidad no encontrada');
                }
            }
            connection.end();
        });



    } catch (e) {

        console.log(err);

    }

}