const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

//Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Rutas
// app.get('/', function(req, res){
//     res.send('Holaaaaaaaaaa')
// })

app.get('/success', function(req, res){
    res.send('success')
})

app.get('/failure', function(req, res){
    res.send('failure')
})

app.get('/pending', function(req, res){
    res.send('pending')
})

app.use('/api', require('./routes/mp'));

// Middleware para vue js modo history
const history =require('connect-history-api-fallback')
app.use(history()) // antes de ruta estatica
app.use(express.static(path.join(__dirname, 'public')))

app.set('puerto', process.env.PORT || 5000);
app.listen(app.get('puerto'),function(){
    console.log('Escuchando Puerto:' + app.get('puerto'));
})