//importar o pacote do express
const express = require('express')
//executar o express application
const app = express()

//configurar a porta local
const porta = process.env.PORT || 3000

//importar o consign
const consign = require('consign')
//executar e configurar o consign
consign().include('./routes').into(app)

//indicar a poasta dos assets (css, js. images, webfonts)
app.use(express.static('./src/'))

//habilitar o expres para receber dados de formulários
app.use(express.urlencoded({extended:false}))

module.exports = {app,porta}