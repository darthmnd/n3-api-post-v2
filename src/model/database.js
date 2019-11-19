const mongoose = require("mongoose")
// string de conexão
const DB_URL ="mongodb://localhost:27017/reprograma"

const connect = () => {
    mongoose.connect(DB_URL, {useNewParser: true})
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao conectar no mongo'))
    connection.once('open', () => console.log('Conectamos no mongo!'))
}

module.exports = { connect }