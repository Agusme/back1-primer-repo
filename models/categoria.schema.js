const {Schema, model} = require('mongoose')

const CategoriasSchema = new Schema({
    nombre:{
        type: 'String',
        required: true,
        unique:true
    }
})

const CategoriaModel = model('category', CategoriasSchema)

module.exports = CategoriaModel