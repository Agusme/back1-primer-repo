const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.MONGODB_CONNECT).then(()=> console.log('BD Connect'))
} catch (error) {
    console.log(error)
}
module.exports = mongoose