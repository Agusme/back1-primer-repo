let productos = [
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
];

const obtenerTodosLosProductos = () => {
  return productos;
};

const obtenerUnProducto = (id) => {
  const producto = productos.find((prod) => prod.id === id);
  return producto;
};

const crearNuevoUnProducto = () => {
  try {
    const nuevoProducto = {
      id:
        productos[productos.length - 1].id +
        1 /* obtener el ultimo array y le sume uno*/,
      ...body,
    };
    productos.push(nuevoProducto);
    return nuevoProducto;
  } catch (error) {
    console.log(error);
  }
};

const editarProducto = (idProducto) => {
  try {
    const posicionProductoEnElArray = productos.findIndex(
      (producto) => producto.id === id
    );

    const productoEditado = {
      id,
      ...req.body,
    };
    productos[posicionProductoEnElArray] = productoEditado;

    return productoEditado;
  } catch (error) {
    console.log(error);
  }
};

const eliminarProducto = (idProducto) => {
  try {
    const posicionProductoEnElArray = productos.findIndex(
      (producto) => producto.id !== id
    );
    productos.splice(posicionProductoEnElArray, 1);
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
