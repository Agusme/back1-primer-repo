const transporter = require('../helpers/nodemailer')

const registroUsuario = async (nombreUsuario, emailUsuario) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Bienvenido a nuestra pagina 👻" <${process.env.GMAIL_USER}>`,
      to: 'agusmena60@gmail.com', // list of receivers
      subject: "Hello ✔", // Subject line
      html: `<h1>Bienvenidos a nuestra pagina🚀🚀</h1>
          <p>Un gusto recibirte en nuestra pagina!</p>
`
    });
}
   module.exports  = {
    registroUsuario
   }