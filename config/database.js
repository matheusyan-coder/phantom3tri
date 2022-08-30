const mongoose = require('mongoose')
const user = 'user3tri'
const pw ='matheus2006'
const cluster = 'fiaptecnico.p5s1m.mongodb.net'
const db = 'html5up'
const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://'+user+':'+pw+'@'+cluster+'/'+db)
}
const modelo = mongoose.Schema({
    estilos:String,
    imagem:String,
    titulo:String,
    texto:String,
    cadastradoem:{type:Date,dafault:Date.now}
})
const conteudo = mongoose.model('conteudo',modelo)
module.exports = {conteudo, conexao}