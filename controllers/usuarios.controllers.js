const serviceUsuario = require("../services/usuarios.services");
const registrarUsuario = (req, res) => {
  try {
    const res = serviceUsuario.nuevoUsuario(req.body);
    if (res === 201) {
      ///
    }
  } catch (error) {
    console.log(error);
  }
};
const obtenerTodosUsuarios = (req, res) => {
  try {
    const usuarios = serviceUsuario.obtenerTodosUsuarios;
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
  }
};

const obtenerUnUsuario = (req, res) => {
  try {
    const usuario = serviceUsuario.obtenerUnUsuario(req.params.idUsuario);

    res.status(200).json({ msg: "usuario encontrado", usuario });
  } catch (error) {
    console.log(error);
  }
};

const bajaFisicaUsuario = (req, res) => {
  try {
    const res = serviceUsuario.bajaUsuarioFisica(req.params.idUsuario);
    if (res === 200) {
      res.status(200).json({ msg: "Usuario borrado con exito" });
    }
  } catch (error) {
    console.log(error);
  }
};

const bajaLogicaUsuario = (req, res) => {
  try {
    const res = serviceUsuario.bajaUsuarioLogica(req.params.idUsuario);
    res.status(200).json({ msg: res });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registrarUsuario,
  obtenerTodosUsuarios,
  obtenerUnUsuario,
  bajaFisicaUsuario,
  bajaLogicaUsuario,
};
