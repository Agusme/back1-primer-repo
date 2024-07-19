const {Schema, model} = require('mongoose')


const FavoritosSchema = new Schema(
 {
    idUsuario:{
     type:String,   
    },
    productos:[]
 }
)

const FavoritoModel = model('favs', FavoritosSchema)
module.exports = FavoritoModel