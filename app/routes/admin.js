//const Connection = require('mysql/lib/Connection')
//const Connection = require('../../config/dbConnection')

module.exports = (application) => {
    application.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia')
    })

    application.post('/noticias/salvar', (req,res) => {
        var noticia = req.body
        
		var connection = application.config.dbConnection()
		var noticiasModel = application.app.models.noticiasModel


		noticiasModel.salvarNoticia(noticia, (error, result) => {
			//res.send(noticia)
			res.redirect('/noticias')
		})
    });
}