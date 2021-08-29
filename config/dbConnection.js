var mysql = require('mysql')

var connMySQL = () => {
    console.log('Connection with DB successfully completed!')
    return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('AUTOLOAD connected with DB successfully!')
    return connMySQL
}
