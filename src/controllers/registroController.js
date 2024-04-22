const connection = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.registro = (req, res) => {

    const { username, password } = req.body;
    const consultaVerificacion = 'SELECT * FROM usuarios WHERE email = ? ';


    connection.query(consultaVerificacion, [username], (error, result) => {


        if (result.length == 0) {

            const consulta = "INSERT INTO usuarios (email, password, rol) VALUES (?, ?, 'usuario')";


            try {

                connection.query(consulta, [username, password], (error, result) => {

                    if (error) {
                        res.send(error);
                    }



                    const token = jwt.sign({ username }, "Stack", {
                        expiresIn: "60m"
                    });

                    res.send({ token });


                });


            } catch (e) {


            }

        } else {

            res.send({ message: '¡El usuario que intenta registrar ya existe!' });

        }
    });



}