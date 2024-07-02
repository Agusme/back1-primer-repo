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
    const nuevoProducto = {
      id:
        productos[productos.length - 1].id +
        1 /* obtener el ultimo array y le sume uno*/,
      ...req.body,
    };
    productos.push(nuevoProducto);

    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json(error);
  }
};
const editarUnProducto = (req, res) => {
  try {
    const id = Number(req.params.idProducto);
    const posicionProductoEnElArray = productos.findIndex(
      (producto) => producto.id === id
    );

    const productoEditado = {
      id,
      ...req.body,
    };
    productos[posicionProductoEnElArray] = productoEditado;

    res.status(200).json(productos[posicionProductoEnElArray]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const EliminarUnProducto = (req, res) => {
  try {
    const id = Number(req.params.idProducto);
    const prodNoBorrados = productos.filter((producto) => producto.id !== id);
    productos = prodNoBorrados;
    res.status(200).json(productos);
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
