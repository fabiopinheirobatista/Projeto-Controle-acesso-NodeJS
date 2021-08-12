var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticia = require('./app/routes/form_inclusao_notica')(app);

var rotaTecnologia = require('./app/routes/tecnologia')(app);

app.listen(3000, function(){
    console.log("Server running on http://localhost:3000");
});