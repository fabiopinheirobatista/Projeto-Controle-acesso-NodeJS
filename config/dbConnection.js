var mysql = require('mysql')

var connMySQL = () => {
	console.log('Conexion with DB successfully completed')
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'portal_noticias'
	});
}

module.exports = () => {
	console.log('AUTOLOAD loaded the DB connection module')
	return connMySQL
}