/* const usuarios = [
  {
    id: 1,
    nombreDeUsuario: "andres2024",
    emailDelUsuario: "andresperlo@gmail.com",
    contrasenia: "123456789",
  },
];
 */
const UsuarioModel = require("../models/usuario.schema");

const bcrypt = require("bcrypt");

const nuevoUsuario = async (body) => {
  /*  try {
    const emailExiste = usuarios.find(
      (usuario) => usuario.emailDelUsuario === body.emailDelUsuario
    );
    const usuarioExiste = usuarios.find(
      (usuario) => usuario.nombreDeUsuario === body.nombreDeUsuario
    );
    if (emailExiste) {
      return res.status(400).json({ msg: "email no disponible" });
    } else if (usuarioExiste) {
      return res.status(400).json({ msg: "usuario no disponible" });
    }
    const id = crypto.randomUUID();
    usuarios.push({ id, baja: false, ...body });

    return 201; 
  } catch (error) {
    console.log(error);
  }*/

  try {
    const usuarioExiste = await UsuarioModel.findOne({
      nombreUsuario: body.nombreUsuario,
    });
    if (usuarioExiste) {
      return 400;
    }

    /* PARA ENCRIPTAR LA CONTRASEÑA */
    let salt = bcrypt.genSaltSync();
    body.contrasenia = bcrypt.hashSync(body.contrasenia, salt);

    const usuario = new UsuarioModel(body);
    await usuario.save();
    return 201;
  } catch (error) {
    console.log(error);
  }
};

const inicioSesion = async(body) => {
  try {
  
    const usuarioExiste = await UsuarioModel.findOne({nombreUsuario: body.nombreUsuario})
    if(!usuarioExiste){
      return 400
    }

    /* verificacion contrasenia */
    const verificacionContrasenia = bcrypt.compareSync(body.contrasenia, usuarioExiste.contrasenia)
  
    if(verificacionContrasenia){
      return 200
    }else{
      return 400
    }
  
    
    
  } catch (error) {
    console.log(error)
  }
  }
  const obtenerTodosLosUsuarios = async () => {
    try {
      const usuarios = await UsuarioModel.find()
      return usuarios
    } catch (error) {
      console.log(error)
    }
  }

const obtenerUnUsuario = async (idUsuario) => {
  try {
    const usuario = await usuarios.find((user) => user.id === idUsuario);

    return usuario;
  } catch (error) {
    console.log(error);
  }
};

//baja fisica

const bajaUsuarioFisica = async (idUsuario) => {

  await UsuarioModel.findByIdAndDelete({ _id: idUsuario})
  return 200
}

const bajaUsuarioLogica = async (idUsuario) => {
  const usuario = await UsuarioModel.findOne({ _id: idUsuario })
  usuario.bloqueado = !usuario.bloqueado

  const actualizarUsuario = await UsuarioModel.findByIdAndUpdate({ _id: idUsuario }, usuario, { new: true })
  return actualizarUsuario
}


module.exports = {
  nuevoUsuario,
  inicioSesion,
  obtenerTodosLosUsuarios,
  obtenerUnUsuario,
  bajaUsuarioFisica,
  bajaUsuarioLogica
}