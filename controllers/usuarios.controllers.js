const serviceUsuario = require("../services/usuarios.services");


const registrarUsuario = async(req, res) => {
  /* try {
    const res = serviceUsuario.nuevoUsuario(req.body);
    if (res === 201) {
      res.status(201).json({msg: 'Usuario registrado con exito'})
    }
  } catch (error) {
    console.log(error);
  } */
try {
  const result = await serviceUsuario.nuevoUsuario(req.body)
if(result === 201){
  res.status(201).json({msg:'Usuario registrado'})
}

} catch (error) {
  console.log(error)
}
}
 
/* INICIAR */
const iniciarSesionUsuario = async (req, res)=>{
  try {
    const usuario = await serviceUsuario.inicioSesion(req.body)
  } catch (error) {
    console.log(error)
  }
}




const obtenerTodosUsuarios = (req, res) => {
  try {
    const usuarios = serviceUsuario.obtenerTodosLosUsuarios();
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
