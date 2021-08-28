var dbConnection = require('../../config/dbConnection')

module.exports = (app) => {
    var connection = dbConnection()
    
    app.get('/noticias', function(req,res){

        connection.query("SELECT * FROM noticias", (error, result) => {
            res.render('noticias/noticias', { noticias : result });
        });
    });
}