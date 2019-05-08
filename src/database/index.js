const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', () => console.log('👽 YOU ARE CONECTED 👽'))
mongoose.Promise = global.Promise

module.exports = mongoose