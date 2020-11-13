const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
        nombre: String,
        descripccion: String,
        precio: Number,
        img: String,
        ruta: String
    }

);

var producto = mongoose.model('Producto', productoSchema);
module.exports = producto;