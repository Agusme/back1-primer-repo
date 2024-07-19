const { validationResult } = require("express-validator");
const serviciosProductos = require("../services/productos.services");
const ProductoModel = require("../models/producto.schema");

const obtenerUnProductoPorIdOTodos = async (req, res) => {
  try {
    const id = req.query.id;
    const limit = req.query.limit || 10;
    const to = req.query.to || 0;

    if (id) {
      const producto = await serviciosProductos.obtenerUnProducto(id);
      if (producto) {
        res.status(200).json(producto);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    } else {
      const productos = await serviciosProductos.obtenerTodosLosProductos(
        limit,
        to
      );
      res.status(200).json(productos);
    }
  } catch (error) {
    console.error("Error en obtenerUnProductoPorIdOTodos:", error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};
const crearUnProducto = async (req, res) => {
  try {
    /* const datoProducto= req.body
     */
    /* const{nombre, precio}= req.body
     */
    const { errors } = validationResult(req);
    if (errors.length) {
      return res.status(400).json({ msg: errors[0].msg });
    }
    const nuevoProducto = await serviciosProductos.crearNuevoUnProducto(
      req.body
    );
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error("Error en obtenerUnProductoPorIdOTodos:", error);
    res.status(500).json(error);
  }
};
const editarUnProducto = async (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length) {
    return res.status(400).json({ msg: errors[0].msg });
  }

  try {
    const id = req.params.idProducto;
    const productoActualizado = await serviciosProductos.editarProducto(
      id,
      req.body
    );

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json(error);
  }
};

const EliminarUnProducto = async (req, res) => {
  try {
    const id = req.params.idProducto;
    let res = await serviciosProductos.eliminarProducto(id);
    if (res === 200) {
      res.status.json({ msg: "producto borrado" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const agregarImagenProductoPorId = async (req, res) => {
  try {
    /* file -path - multer - cloudinary */
    /* c://user/destok/imagen.jpg */
    const resultado = await serviciosProductos.agregarImagen(req.params.idProducto, req.file);
if(resultado === 200){
  res.status(200).json({msg:'se agrego la imagen correctamente'})
}
 
  } catch (error) {
    console.log(error);
  }
};

const buscarProductoPorTermino =async (req,res)=>{
  try {

    const resultado = await serviciosProductos.buscarProducto(req.query.termino)
res.json(resultado)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  obtenerUnProductoPorIdOTodos,
  crearUnProducto,
  editarUnProducto,
  EliminarUnProducto,
  agregarImagenProductoPorId,
  buscarProductoPorTermino
};
