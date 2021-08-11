var app = require('./config/server')

app.get('/', function(req, res){
    res.render("home/index")
})

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia")
})

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia")
})

app.get('/noticias', function(req, res){
    res.render("noticias/noticias")
})

app.listen(3000, function(){
    console.log('Server running on http://localhost:3000')
})