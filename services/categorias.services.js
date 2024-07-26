const CategoriaModel = require("../models/categoria.schema");
const CarritoModel = require("../models/modelo.schema");

const nuevaCategoria = async (body) => {
  const categoria = new CategoriaModel(body);
  await categoria.save();
  return {
    msg: "Categoria agregada",
    statusCode: 200,
  };
};

const traerTodasLasCategorias = async () => {
  const categorias = await CategoriaModel.find();

  return {
    categorias,
    statusCode: 201,
  };
};
const traerUnaCategoria = async (idCategoria) => {
  const categorias = await CategoriaModel.findById(idCategoria);

  return {
    categorias,
    statusCode: 200,
  };
};

const actualizarunaCategoria = async (idCategoria, body) => {
  const categoriasActualizada = await CategoriaModel.findByIdAndUpdate(
    { _id: idCategoria },
    body
  );

  return {
    msg: "CATEGORIA ACTUALIZADA",
    categoriasActualizada,
    statusCode: 200,
  };
};


const borrarCategoria = async (idCategoria) => {
  await CategoriaModel.findByIdAndDelete({ _id: idCategoria });
  return {
    msg: "CATEGORIA borrada",
    statusCode: 200,
  };
};

module.exports = {
  nuevaCategoria,
  traerTodasLasCategorias,
  traerUnaCategoria,
  actualizarunaCategoria,
  borrarCategoria,
};
