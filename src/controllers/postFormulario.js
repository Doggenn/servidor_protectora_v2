const connection = require('../models/db')


module.exports.postFormulario = (req, res) => {

    const {
        id_usuario,
        id_mascota,
        other_animal,
        cuales,
        actitud,
        porqueadoptar,
        necesitades,
        nombre_completo,
        email,
        telefono,
        dni,
        direccion,
        codigo_postal,
        ciudad,
        tipo_vivienda,
        alquiler,
        casero,
        mudanza,
        jardin,
        compis,
        acuerdo_adopcion,
        acuerdo_visitas
    } = req.body;

    const values = [
        id_usuario,
        id_mascota,
        other_animal,
        cuales,
        actitud,
        porqueadoptar,
        necesitades,
        nombre_completo,
        email,
        telefono,
        dni,
        direccion,
        codigo_postal,
        ciudad,
        tipo_vivienda,
        alquiler,
        casero,
        mudanza,
        jardin,
        compis,
        acuerdo_adopcion,
        acuerdo_visitas
    ];



    try {

        connection.query("INSERT INTO formulario_adopcion (id_usuario, id_mascota, other_animal, cuales, actitud, porqueadoptar, necesitades, nombre_completo, email, telefono, dni, direccion, codigo_postal, ciudad, tipo_vivienda, alquiler, casero, mudanza, jardin, compis, acuerdo_adopcion, acuerdo_visitas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", values, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send('Formulario de adopción creado correctamente');
            }
        });

        connection.end();

    } catch (e) {

        console.log(err);

    }

}