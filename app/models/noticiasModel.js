function Noticias(){
}

Noticias.prototype.getNoticias = (connection, callback) => {
	connection.query('select * from noticias', callback)
}

Noticias.prototype.getNoticia = (connection, callback) => {
	connection.query('select * from noticias where id_noticia = 2', callback)

Noticias.prototype.salvarNoticia = (noticia, connection, callback) => {
	connection.query('insert into noticas set ?', noticia, callback)
}

module.exports = () => {
	return Noticias
	}
}