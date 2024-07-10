const {Router} = require('express')
const { registrarUsuario, obtenerTodosUsuarios, obtenerUnUsuario, bajaFisicaUsuario, bajaLogicaUsuario,iniciarSesionUsuario  } = require('../controllers/usuarios.controllers')
const router = Router()

router.post('/', registrarUsuario)
router.post('/login', iniciarSesionUsuario)
router.get('/', obtenerTodosUsuarios)
router.get('/:idUsuario', obtenerUnUsuario)
router.delete('/:idUsuario', bajaFisicaUsuario)
router.put('/:idUsuario', bajaLogicaUsuario)

module.exports= router