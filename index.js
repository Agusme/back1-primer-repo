/* const express = require("express");
 *//* const app = express(); */ /* metdo de express guardado en la variable app */
/* const path = require('path')
const PORT = 3001; */

/* middlware pequeñas funciones que se ejecutan entre la ruta y el controlador */
/* use es un middleware */
/* 
me habilita el formato json
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))) */


/* let productos = [
  { id: 1, nombre: "Celular", precio: 100 },
  {
    id: 2,
    nombre: "Tablet",
    precio: 200,
  },
]; */

/* verbos http: GET-POST-PUT- DELETE */

/* Endpoint fomrmado por ruta */
/* Ahora quiero crear un endpoint q me traiha todos los productos */
/* app.get('/api/productos'),(req,res)=> {
    try{}catch{}
} */

/* app.get("/api/productos", (req, res) => { */
  /* Request: es la peticion que el fron envia 
    el req tiene el req.body- req.params - el req.query
    el params se refiere al parametro , la ruta se modifica con dos puntos
    http://localhost:3001/api/:parametros
    el query habla de q voy a recibir un dato y la ruta no  se modifica, mediante el signo de pregunta?
    http://localhost:3001/api/productos?id=1
    */
  /* Response: respuesta del back al front */
  /* la response se contruye con el status y el formato */
  /* try {
    const id = Number(req.query.id);

    if (id) {
      const producto = productos.find((prod) => prod.id === id);
      res.status(200).json(producto);
    } else {
      res.status(200).json(productos);
    }
  } catch (error) { */
    /* response- stauts-formato */
   /*  res.status(500).json(error);
  }
}); */

/* URL PARA ID */

/* app.get("/api/productos/:idProductos", (req, res) => {
  const id = Number(req.params.idProductos);
  const producto = productos.find((prod) => prod.id === id);
  res.status(200).json(producto);
});
 */
/* post */
/* app.post("/api/productos", (req, res) => {
  try { */
    /* const datoProducto= req.body
     */
    /* const{nombre, precio}= req.body
     */
    /* const nuevoProducto = {
      id:
        productos[productos.length - 1].id +
        1  *//* obtener el ultimo array y le sume uno*//* ,
      ...req.body,
    };
    productos.push(nuevoProducto);

    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json(error);
  }
}); */

/* PUT - editar */

/* app.put("/api/productos/:idProducto", (req, res) => {
  try {
    const id = Number(req.params.idProducto);
    const posicionProductoEnElArray = productos.findIndex(
      (producto) => producto.id === id
    );

    const productoEditado = {
      id,
      ...req.body,
    };
    productos[posicionProductoEnElArray] = productoEditado;

    res.status(200).json(productos[posicionProductoEnElArray]);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete("/api/productos/:idProducto", (req, res) => {
  try {
    const id = Number(req.params.idProducto);
    const prodNoBorrados = productos.filter((producto) => producto.id !== id);
    productos = prodNoBorrados;
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log("server ok", PORT);
}); */



/* EL INDEX LEVENTA EL SERVER UNICAMENTE */
/* aca traigo la clase */
require('dotenv').config();
const Server = require('./server/config')
/* aca lo instancia */
const server = new Server()
/* aca lo ejecuto */
server.listen()
