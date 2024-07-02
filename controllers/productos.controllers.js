const serviciosProductos = require('../services/productos.services')


const ObtenerUnProductoOTodosPorId = (req, res) => {
  try {
    const id = Number(req.query.id);

    if (id) {
      const producto = serviciosProductos.obtenerUnProducto
      res.status(200).json(producto);
    } else {
      const productos = serviciosProductos.obtenerTodosLosProductos
      res.status(200).json(productos);
    }
  } catch (error) {
    /* response- stauts-formato */
    res.status(500).json(error);
  }
};

const crearUnProducto = (req, res) => {
  try {
    /* const datoProducto= req.body
     */
    /* const{nombre, precio}= req.body
     */

    const resultado = serviciosProductos.crearNuevoUnProducto(req.body)

    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json(error);
  }
};
const editarUnProducto = (req, res) => {
  try {
    const id = Number(req.params.idProducto);
    const productoActualizado = serviciosProductos.editarProducto(id)

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json(error);
  }
};

const EliminarUnProducto = (req, res) => {
  try {
    const id = Number(req.params.idProducto);
serviciosProductos.eliminarProducto(id)
if (res === 200){
  res.status.json({msg: 'producto borrado'})
}
    res.status(200).json({});
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  ObtenerUnProductoOTodosPorId,
  crearUnProducto,
  editarUnProducto,
  EliminarUnProducto,
};
