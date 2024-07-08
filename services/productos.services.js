/* let productos = [
  {
    id: 1,
    nombre: "Celular",
    precio: 100000,
  },
  {
    id: 2,
    nombre: "Tablet",
    precio: 120000,
  },
]; */
const ProductoModel = require("../models/producto.schema");

const obtenerTodosLosProductos = async() => {
  const obtenerProductos = await ProductoModel.find()
  return obtenerProductos
}
const obtenerUnProducto = async(id) => {
  const producto = await ProductoModel.findById({_id: id})
  return producto
}

const crearNuevoUnProducto = (body) => {
  try {
    /*   const nuevoProducto = {
      id:
        productos[productos.length - 1].id +
        1 ,
      ...body,
    };
    productos.push(nuevoProducto);
    return nuevoProducto; */
    const newProduct = new ProductoModel(body);
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

const editarProducto = async (idProducto, body) => {
  try {
    const productoEditado = await ProductoModel.findByIdAndUpdate(
      { _id: idProducto },
      body,
      { new: true }
    );
    return productoEditado;

    /*  const posicionProductoEnElArray = productos.findIndex(
      (producto) => producto.id === id
    );

    const productoEditado = {
      id,
      ...req.body,
    };
    productos[posicionProductoEnElArray] = productoEditado;

    return productoEditado; */
  } catch (error) {
    console.log(error);
  }
};

const eliminarProducto = async (idProducto) => {
  /*  const posicionProductoEnElArray = productos.findIndex(
      (producto) => producto.id !== id
    );
    productos.splice(posicionProductoEnElArray, 1);
    return 200; */
  try {
    await ProductoModel.findByIdAndDelete({ _id: idProducto });
    return 200;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  obtenerTodosLosProductos,
  obtenerUnProducto,
  crearNuevoUnProducto,
  editarProducto,
  eliminarProducto,
};
