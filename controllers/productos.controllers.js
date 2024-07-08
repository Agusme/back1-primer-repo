const serviciosProductos = require("../services/productos.services");

const obtenerUnProductoPorIdOTodos = async(req, res) => {
  try {
    const id = req.query.id 
    
    if (id) {
      const producto = await serviciosProductos.obtenerUnProducto(id)
      res.status(200).json(producto)
    } else {
      const productos = await serviciosProductos.obtenerTodosLosProductos()
      res.status(200).json(productos)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
const crearUnProducto = async (req, res) => {
  try {
    /* const datoProducto= req.body
     */
    /* const{nombre, precio}= req.body
     */

    const nuevoProducto = await serviciosProductos.crearNuevoUnProducto(
      req.body
    );
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json(error);
  }
};
const editarUnProducto = async (req, res) => {
  try {
    const id = req.params.idProducto;
    const productoActualizado = await serviciosProductos.editarProducto(id, req.body);

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json(error);
  }
};

const EliminarUnProducto = async(req, res) => {
  try {
    const id = req.params.idProducto;
 let res= await   serviciosProductos.eliminarProducto(id);
    if (res === 200) {
      res.status.json({ msg: "producto borrado" });
    }
   
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  obtenerUnProductoPorIdOTodos,
  crearUnProducto,
  editarUnProducto,
  EliminarUnProducto,
};
