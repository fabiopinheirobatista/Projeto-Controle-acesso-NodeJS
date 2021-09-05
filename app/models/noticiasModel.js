function Noticias(){
	//
}

Noticias.prototype.getNoticias = () => {
	connection.query('select * from noticias', callback)
}

module.exports = () => {

	this.getNoticia = (connection, callback) => {
		connection.query('select * from noticias where id_noticia = 2', callback)
	}

	this.salvarNoticia = (noticia, connection, callback) => {
		connection.query('insert into noticias set ? ', noticia)
		callback()
	}

	return this
}