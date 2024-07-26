const serviciosCategorias = require("../services/categorias.services");

const obtenerLasCategorias = async (req, res) => {
  try {
    const categorias = await serviciosCategorias.traerTodasLasCategorias();

    if (categorias.statusCode === 200) {
      res.status(200).json({ msg: categorias.msg });
    }
  } catch (error) {
    console.log;
  }
};

const obtenerCategorias = async (req, res) => {
  try {
    const categoria = await serviciosCategorias.traerUnaCategoria(req.params.idCategoria);
    if (categoria.statusCode === 200) {
      res.status(200).json({ msg: categoria.msg });
    }
  } catch (error) {
    console.log;
  }
};

const crearCategorias = async (req, res) => {
  try {
    const categoria = await serviciosCategorias.nuevaCategoria(req.body);
    if ((categoria.statusCode = 201)) {
      res.status(201).json({ msg: categoria.msg });
    }
  } catch (error) {
    console.log;
  }
};

const actualizarCategoria = async (req, res) => {
  try {
const categoria = await serviciosCategorias.actualizarunaCategoria(req.params.idCategoria, req.body)

if (categoria.statusCode === 200) {
    res.status(200).json({ msg: categoria.msg });
  }

  } catch (error) {
    console.log;
  }
};

const eliminarCategoria = async (req, res) => {
  try {

    const categoria = await serviciosCategorias.borrarCategoria(req.params.idCategoria)

    if (categoria.statusCode === 200) {
        res.status(200).json({ msg: categoria.msg });
      }
    

  } catch (error) {
    console.log;
  }
};

module.exports = {
  obtenerLasCategorias,
  obtenerCategorias,
  crearCategorias,
  actualizarCategoria,
  eliminarCategoria,
};
