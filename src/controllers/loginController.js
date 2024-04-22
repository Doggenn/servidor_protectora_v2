const connection = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {

    const { username, password } = req.body;

    const consulta = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
    try {

        connection.query(consulta, [username, password], (error, result) => {

            if (error) {
                res.send(error);
            }

            if (result.length > 0) {

                const token = jwt.sign({ username }, "Stack", {
                    expiresIn: "60m"
                });

                res.send({ token });

            } else {
                console.log('Usuario no existe');
                res.send({ message: '¡El usuario ingresado no existe!' });
            }
        });


    } catch (e) {


    }


}