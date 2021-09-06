module.exports = (app) => {
    app.get('/tecnologia', (req,res) => {
        res.render('secao/tecnologia')
    })
}