var mysql = require('mysql')

var connMySQL = () => {
	//console.log('Connection with the DB successful!!!')
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'portal_noticias'
	});
}

module.exports = () => {
	//console.log('AUTOLOAD loaded the DB connection module!')
	return connMySQL
}