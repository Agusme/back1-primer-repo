const express = require("express");
const auth = require('../middlewares/auth')
const router = express.Router();
const {
  obtenerUnProductoPorIdOTodos,
  crearUnProducto,
  editarUnProducto,
  EliminarUnProducto,
  agregarImagenProductoPorId,
  buscarProductoPorTermino,
} = require("../controllers/productos.controllers");
const { check } = require("express-validator");
const multer = require("../middlewares/multer");



/*PETICIONES verbos http: GET-POST-PUT- DELETE */

/* Endpoint fomrmado por ruta */
/* Ahora quiero crear un endpoint q me traiha todos los productos */
/* app.get('/api/productos'),(req,res)=> {
    try{}catch{}
} */

/* Request: es la peticion que el fron envia 
            el req tiene el req.body- req.params - el req.query
            el params se refiere al parametro , la ruta se modifica con dos puntos
            http://localhost:3001/api/:parametros
            el query habla de q voy a recibir un dato y la ruta no  se modifica, mediante el signo de pregunta?
            http://localhost:3001/api/productos?id=1
            */
/* Response: respuesta del back al front */
/* la response se contruye con el status y el formato */

/* URL PARA ID */

/* app.get("/api/productos/:idProductos", (req, res) => {
          const id = Number(req.params.idProductos);
          const producto = productos.find((prod) => prod.id === id);
          res.status(200).json(producto);
        });
         */
/* post */
router.post(
  "/",
  [
    check("nombre", "campo nombre vacio").not().isEmpty(),
    check("precio", "campo precio vacio").not().isEmpty(),
    check("descripcion", "campo descripcion vacio").not().isEmpty(),
  ],
  crearUnProducto
);

router.post('/agregarImagen/:idProducto',multer.single('imagen'), agregarImagenProductoPorId)
/* query- {{url}}/api/productos/buscar?termino=Ultimo */
router.get('/buscar', buscarProductoPorTermino)
router.get("/", obtenerUnProductoPorIdOTodos);

/* PUT - editar */

router.put("/:idProducto",
  [
    check("nombre", "campo nombre vacio").not().isEmpty(),
    check("precio", "campo precio vacio").not().isEmpty(),
    check("descripcion", "campo descripcion vacio").not().isEmpty(),
  ],
  auth("admin"),
  editarUnProducto);

router.delete("/:idProducto", auth('admin'), EliminarUnProducto);

module.exports = router;
