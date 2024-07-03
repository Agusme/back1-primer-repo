const usuarios = [
  {
    id: 1,
    nombreDeUsuario: "andres2024",
    emailDelUsuario: "andresperlo@gmail.com",
    contrasenia: "123456789",
  },
];

const nuevoUsuario = (body) => {
  try {
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
  }
};

const obtenerTodosLosUsuarios = () => {
  try {
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

const obtenerUnUsuario = (idUsuario) => {
  try {
    const usuario = usuarios.find((user) => user.id === idUsuario);

    return usuario;
  } catch (error) {
    console.log(error);
  }
};

//baja fisica

const bajaUsuarioFisica = (IdUsuario) => {
  const posicionDelUsuario = usuarios.findIndex(
    (usuario) => usuario.id === idUsuario);
  usuarios.splice(posicionDelUsuario, 1);
  return 200;
};

const bajaUsuarioLogica = (idUsuario) => {
  const posicionDelUsuario = usuarios.findIndex(
    (usuario) => usuario.id === idUsuario
  );
  usuarios[posicionDelUsuario].baja = !usuarios[posicionDelUsuario].baja;
  const mensaje = usuarios[posicionDelUsuario].baja
    ? "Usuario Bloqueado"
    : "Usuario Activo";
  return mensaje;
};

module.exports = {
  nuevoUsuario,
  obtenerTodosLosUsuarios,
  obtenerUnUsuario,
  bajaUsuarioFisica,
  bajaUsuarioLogica,
};
