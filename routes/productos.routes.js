const express = require("express");

const {
  obtenerUnProductoPorIdOTodos,
  crearUnProducto,
  editarUnProducto,
  EliminarUnProducto,
} = require("../controllers/productos.controllers");

const router = express.Router();

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
router.post("/", crearUnProducto);
router.get("/", obtenerUnProductoPorIdOTodos)


/* PUT - editar */

router.put("/:idProducto", editarUnProducto);

router.delete("/:idProducto", EliminarUnProducto);

module.exports = router;
