const mysql = require('mysql');
const connection = mysql.createConnection({

    host: 'pro.freedb.tech',
    user: 'Doggenn',
    password: 'deUkARF%!gW!5Xp',
    database: 'protectora'

});


module.exports = connection;