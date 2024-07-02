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

const obtenerTodosLosProductos = ()=>{
    return productos;
}

const obtenerUnProducto = (id) => {
  const producto = productos.find((prod) => prod.id === id);
  return producto;
};

module.exports={
    obtenerTodosLosProductos,
    obtenerUnProducto
}