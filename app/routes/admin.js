module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia')
    })

    application.post('/noticias/salvar', (req, res) => {
        var noticia = req.body

        req.assert('titulo','O Titulo é obrigatório').notEmpty()
        req.assert('resumo','O Resumo da Notícia é obrigatório').notEmpty()
        req.assert('resumo','O Resumo deve conter entre 10 e 100 caracteres').len(10,100)
        req.assert('autor','O Nome do (a) Autor (a)').notEmpty()
        req.assert('data_noticia','A data da notícia é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'})
        req.assert('noticia','A notícia é obrigatória').notEmpty()

        var erros = req.validationErrors()
        if(erros){
            res.render('admin/form_add_noticia')
            return
        }
        
		var connection = application.config.dbConnection()
		var noticiasModel = application.app.models.noticiasModel


		noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
			//res.send(noticia)
			res.redirect('/noticias')
		})
    });
}