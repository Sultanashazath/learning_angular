module.exports=(app)=>{
    var control=require('../controller/controller')
    app.get('/api',control.api)
    app.post('/api/authorDetailsInsert',control.authorDetailsInsert)
    app.get('/api/getAlldata',control.getAlldata)
}