//module.exports = function(app){
exports.pool = function(app){
    const mysql = require('../views/config/config.json').pool
    app.get('/noticias', function(req,res){

        const mysql = require('mysql')

        var pool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: process.env.MYSQL_PORT
        })

        /*var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias',
            insecureAuth: true
        });*/

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