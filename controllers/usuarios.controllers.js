const serviceUsuario = require("../services/usuarios.services");
const { validationResult } = require("express-validator");

const registrarUsuario = async (req, res) => {
  /* try {
    const res = serviceUsuario.nuevoUsuario(req.body);
    if (res === 201) {
      res.status(201).json({msg: 'Usuario registrado con exito'})
    }
  } catch (error) {
    console.log(error);
  } */
  try {
    const { errors } = validationResult(req);
    if (errors.length) {
      return res.status(400).json({ msg: errors[0].msg });
    }
    const result = await serviceUsuario.nuevoUsuario(req.body);
    if (result === 201) {
      res.status(201).json({ msg: "Usuario registrado" });
    }
  } catch (error) {
    console.log(error);
  }
};

/* INICIAR */
const iniciarSesionUsuario = async (req, res) => {
  try {
    const result = await serviceUsuario.inicioSesion(req.body);

    if (result === 400) {
      res.status(400).json({ msg: "Usuario y/o contraseña incorrecto" });
    } else {
      res.status(200).json({ msg: "Usuario inicio sesion" });
    }
  } catch (error) {
    console.log(error);
  }
};

const obtenerTodosUsuarios = async (req, res) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length) {
      return res.status(400).json({ msg: errors[0].msg });
    }
    const usuarios = await serviceUsuario.obtenerTodosLosUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
  }
};

const obtenerUnUsuario = async (req, res) => {
  try {
    const usuario = await serviceUsuario.obtenerUnUsuario(req.params.idUsuario);
    res.status(200).json({ msg: "usuario encontrado", usuario });
  } catch (error) {
    console.log(error);
  }
};

const bajaFisicaUsuario = async (req, res) => {
  try {
    const resultado = await serviceUsuario.bajaUsuarioFisica(
      req.params.idUsuario
    );
    if (resultado === 200) {
      res.status(200).json({ msg: "Usuario borrado con exito" });
    }
  } catch (error) {
    console.log(error);
  }
};

const bajaLogicaUsuario = async (req, res) => {
  try {
    const usuario = await serviceUsuario.bajaUsuarioLogica(
      req.params.idUsuario
    );
    res.status(200).json({ msg: usuario });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registrarUsuario,
  iniciarSesionUsuario,
  obtenerTodosUsuarios,
  obtenerUnUsuario,
  bajaFisicaUsuario,
  bajaLogicaUsuario,
};
