module.exports = (application) => {
	application.get('/noticias', (req, res) => {
	
		var connection = application.config.dbConnection()
		var noticiasModel = application.app.models.noticiasModel

		noticiasModel.getNoticias(connection, (error, result) => {
			res.render('noticias/noticias', {noticias : result})
		})
	})

	application.get('/noticia', (req, res) => {
	
		var connection = application.config.dbConnection()
		var noticiasModel = application.app.models.noticiasModel

		noticiasModel.getNoticia(connection, (error, result) => {
			res.render('noticias/noticia', {noticia : result})
		})
	});
}