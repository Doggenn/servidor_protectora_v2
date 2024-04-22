const connection = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {

    const { username, password } = req.body;

    
    try {

        if (username != "" && password != "") {

            
            const consulta = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
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


        } else {
            

            res.send({ message: '¡No puedes dejar los campos vacios de Email o contraseña!' });

        }

       


    } catch (e) {


    }


}