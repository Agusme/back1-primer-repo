const {Router} = require('express')
const { registrarUsuario, obtenerTodosUsuarios, obtenerUnUsuario, bajaFisicaUsuario, bajaLogicaUsuario,  } = require('../controllers/usuarios.controllers')
const router = Router()

router.post('/', registrarUsuario)

router.get('/', obtenerTodosUsuarios)
router.get('/:idUsuario', obtenerUnUsuario)
router.delete('/:idUsuario', bajaFisicaUsuario)
router.put('/:idUsuario', bajaLogicaUsuario)





module.exports= router