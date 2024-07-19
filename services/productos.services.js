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
const cloudinary= require('../helpers/cloudinary')
const obtenerTodosLosProductos = async (limit, to) => {
 /*  const obtenerProductos = await ProductoModel.find();
  return obtenerProductos; */

  /* PAGINACION */
  const [ productos, cantidadTotal] = await Promise.all([
    /* primer valor q necesito que la promesa me resuelva, 2 valor: cuanto es la camtidad total */
  ProductoModel.find(/* {activo: true} me filtra todos los que tengan el acitvo en true */).skip(to * limit ).limit(limit),
  /* skip desde que lugar y limit hasya */
  ProductoModel.countDocuments(/* {activo: true} */) /* me devuelve el total de elementos */
  ])
  const paginacion = {
    productos,
    cantidadTotal
  }
  return paginacion
};

const obtenerUnProducto = async (id) => {
  const producto = await ProductoModel.findById(id);
  return producto;
};

const buscarProducto = async(termino)=>{
const reglaBusqueda = new RegExp(termino, "i")
const productos = await ProductoModel.find({$or:[
{ nombre: reglaBusqueda},
{descripcion: reglaBusqueda}
]})
return productos
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
    await ProductoModel.findByIdAndDelete({_id: idProducto});
    return 200;
  } catch (error) {
    console.log(error);
  }
};
const agregarImagen= async(idProducto, file) => {
  const producto = await ProductoModel.findOne({_id: idProducto})
  const resultado = await cloudinary.uploader.upload(file.path)
producto.imagen = resultado.secure_url
await producto.save()
return 200
}

module.exports = {
  obtenerTodosLosProductos,
  obtenerUnProducto,
  crearNuevoUnProducto,
  editarProducto,
  eliminarProducto,
  agregarImagen,
  buscarProducto
};
