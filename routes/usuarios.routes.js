const {Router} = require('express')
const { registrarUsuario, obtenerTodosUsuarios, obtenerUnUsuario, bajaFisicaUsuario, bajaLogicaUsuario,iniciarSesionUsuario  } = require('../controllers/usuarios.controllers')
const router = Router()
const {check} = require('express-validator')

router.post('/', [
    check('nombreUsuario', "Nombre de usuario vacio").not().isEmpty(),
    check('nombreUsuario', "min: 5 , max:40").isLength({min:5, max:40}),
    check('contrasenia', "contraseña vacia").not().isEmpty(),
    check('contrasenia', "min: 8 , max:50").isLength({min:8, max:50}),
/*     check('email', "formato incorrecto").isEmail(), */

] ,registrarUsuario)

router.post('/login', [
    check('nombreUsuario', "Nombre de usuario vacio").not().isEmpty(),
],iniciarSesionUsuario)
router.get('/', obtenerTodosUsuarios)
router.get('/:idUsuario',[
    check('_id', "Formato ID incorrecto").isMongoId(),
], obtenerUnUsuario)
router.delete('/:idUsuario', bajaFisicaUsuario)
router.put('/:idUsuario', bajaLogicaUsuario)

module.exports= router