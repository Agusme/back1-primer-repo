const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  
  descripcion: {
    type: String,
    required: true,
    
  },
  precio:{
    type: Number,
    required: true
  }
});

const ProductoModel = mongoose.model("product", ProductSchema);
module.exports = ProductoModel;
