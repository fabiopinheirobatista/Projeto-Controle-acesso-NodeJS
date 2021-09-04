module.exports = (application) => {
	application.get('/formulario_inclusao_noticia', (req, res) => {
		res.render("admin/form_add_noticia")
	})

	application.post('/noticias/salvar', (req, res) => {
		var noticia = req.body

		//salvarNoticia

		//conexão
		var connection = application.config.dbConnection()
		var noticiasModel = application.app.models.noticiasModel

		//model
		noticiasModel.salvarNoticia(noticias, connection, (error, result) => {
			res.render("noticias/noticias", {noticias : result})
		})
	})
}