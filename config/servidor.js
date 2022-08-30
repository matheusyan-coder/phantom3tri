//importar o pacote do express
const express = require('express')
//executar o express aplication
const app = express()

//configurar a porta local
const porta = process.env.PORT || 3000

//indicar a pasta dos assets (css, js, images, webfonts)
app.use(express.static('./src/'))


//importar o consign
const consign = require('consign')
//executar e configurar
consign().include('./routes').into(app)


//habilitar o express para receber os dados de formularios
app.use(express.urlencoded({extended:false}))

module.exports = {app,porta}