const mongoose = require("mongoose");
const UsuarioModel = require("./usuario.schema");

const ProductSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required:true,
  },
  descripcion: {
    type: String,
    required: true,
    
  },
  precio:{
    type: Number,
    required: true
  },
  images:{
    type: String,
    default: '',
  }
});


const ProductoModel = mongoose.model("product", ProductSchema);
module.exports = ProductoModel;
