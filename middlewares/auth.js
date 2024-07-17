const jwt = require("jsonwebtoken");

/* ASI TAMBIEN SE PUEDE EXPORTAR UNA FUNCION, Y COMO ES ANONIMA SE LLAMA COMO EL ARCIHVIO */
module.exports = (rol) => (req, res, next) => {
  try {
    /* en la req tenemos el headers-  body- query -params */
    /* debemos recibir el token */

    const token = req.header("auth");

    if (!token) {
      return res.status(409).json({ msg: "Token incorrecto" });
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verify);
    /* el include devuelve un booleano mme va decir si en alguna aprte tiene la palabra invalid */
  /*   if (verify.includes("invalid")) {
      return res.status(400).json({ msg: "Token incorrecto" });
    } */

    if (rol === verify.rol) {
      return next();
    } else {
      return res.status(401).json({ msg: "no tenes acceso" });
    }
  } catch (error) {
    console.log(error);
  }
};
