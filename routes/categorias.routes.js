const {Router}= require('express')
const { obtenerLasCategorias, obtenerCategorias, crearCategorias, actualizarCategoria, eliminarCategoria } = require('../controllers/categorias.controller')
const router = Router()

router.get('/', obtenerLasCategorias)
router.get('/:idCategoria', obtenerCategorias)
router.post('/', crearCategorias)
router.put('/:idCategoria', actualizarCategoria)
router.delete('/:idCategoria', eliminarCategoria)

module.exports = router