module.exports = function(app){
    app.get('/noticias', function(req,res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias',
            insecureAuth: true
        });

        connection.connect(function(err) {
            if (err){
                 console.log("Ocorreu um erro ao conectar."); 
                 throw err;
             } 
       
            console.log("Conectado com sucesso!");
        });

        connection.query('select * from noticia', function(error, result){
            console.log(result)
            console.log(error)
            res.send(result)
        });
    });
}