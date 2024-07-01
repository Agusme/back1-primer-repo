const usuarios = [
  {
    id: 1,
    nombreDeUsuario: "andres2024",
    emailDelUsuario: "andresperlo@gmail.com",
    contrasenia: "123456789",
  },
];

const registrarUsuario = (req, res) => {
  try {
    const body = req.body;
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
    usuarios.push({ id, baja:false, ...body, });

    res.status(200).json({ msg: "usuario resgistrado con exito" });
  } catch (error) {
    console.log(error);
  }
};
const obtenerTodosUsuarios = (req, res) => {
  try {
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
  }
};

const obtenerUnUsuario = (req, res) => {
  try {
    const id = Number(req.params.idUsuario)
    const usuario = usuarios.find((user) => user.id === id);
    if(!usuario){
        return res.status(400).json({msg:'Usuario no encontrado'})
    }



    res.status(200).json({ msg: "usuario encontrado", usuario });
  } catch (error) {
    console.log(error);
  }
};

const bajaFisicaUsuario =(req, res)=>{
    try {
        const id= req.params.idUsuario
        const posicionDelUsuario = usuarios.findIndex((usuario)=> usuario.id === id)
        usuarios.splice(posicionDelUsuario,1)
        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
    }
}

const bajaLogicaUsuario =(req, res)=>{
    try {
        const id= req.params.idUsuario
        const posicionDelUsuario = usuarios.findIndex((usuario) => usuario.id === id)
        usuarios[posicionDelUsuario].baja = !usuarios[posicionDelUsuario].baja
       const mensaje = usuarios[posicionDelUsuario].baja ? 'Usuario bloqueado ': 'usario activo'
        
        res.status(200).json({msg:mensaje})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  registrarUsuario,
  obtenerTodosUsuarios,
  obtenerUnUsuario,
  bajaFisicaUsuario,
  bajaLogicaUsuario
};
